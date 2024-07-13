import { fork, put } from "redux-saga/effects";
import { runParticipantSagas } from "./participant/Sagas";
import * as participantActions from "./participant/Actions";
import * as teamActions from "./team/Actions";
import { checkQueryStringBoolean, getQueryStringValue } from "../utils";
import { runTeamSagas } from "./team/Sagas";

export function* startup() {
  const participantId = getQueryStringValue("participant");
  const orientation = getQueryStringValue("orientation");
  // Implementing milestones for right orientation is going to take a massive amount of work,
  //  so if orientation is set, we just won't fetch milestones for now.
  const fetchMilestones = !orientation && checkQueryStringBoolean("milestones");

  if (participantId) {
    yield fork(runParticipantSagas);
    yield put(
      participantActions.setParticipantId(+participantId, fetchMilestones)
    );
  } else {
    const teamId = getQueryStringValue("team");
    if (teamId) {
      yield fork(runTeamSagas);
      yield put(teamActions.setTeamId(+teamId));
    } else {
      console.warn(
        "No participant or team ID is set. Set the participant ID using the 'participant' query parameter or the team ID using the 'team' query parameter."
      );
    }
  }
}

export default function* root() {
  yield fork(startup);
}

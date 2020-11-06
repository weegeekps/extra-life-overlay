import { fork, put } from "redux-saga/effects";
import { runParticipantSagas } from "./participant/Sagas";
import * as participantActions from "./participant/Actions";
import * as teamActions from "./team/Actions";
import { getQueryStringValue } from "../utils";
import { runTeamSagas } from "./team/Sagas";

export function* startup() {
  const participantId = getQueryStringValue("participant");

  if (participantId) {
    yield fork(runParticipantSagas);
    yield put(participantActions.setParticipantId(+participantId));
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

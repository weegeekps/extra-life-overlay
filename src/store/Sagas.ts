import { fork, put } from "redux-saga/effects";
import { runParticipantSagas } from "./participant/Sagas";
import * as participantActions from "./participant/Actions";
import { getQueryStringValue } from "../utils";

export function* startup() {
  const id = getQueryStringValue("participant");

  if (id) {
    yield put(participantActions.setParticipantId(+id));
  } else {
    console.warn("No participant ID is set. Set the participant ID using the 'participant' query parameter.")
  }
}

export default function* root() {
  yield fork(startup);
  yield fork(runParticipantSagas);
}

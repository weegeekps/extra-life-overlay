import { fork, put } from "redux-saga/effects";
import { runParticipantSagas } from "./participant/Sagas";
import * as participantActions from "./participant/Actions";
import { getQueryStringValue } from "../Utils";

// Use my participant ID? Not sure what a good default would be.
const DEFAULT_PARTICIPANT_ID = "408096";

export function* startup() {
  const id = getQueryStringValue("participant") || DEFAULT_PARTICIPANT_ID;
  yield put(participantActions.setParticipantId(+id));
}

export default function* root() {
  yield fork(startup);
  yield fork(runParticipantSagas);
}

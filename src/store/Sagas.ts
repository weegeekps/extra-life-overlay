import { fork } from "redux-saga/effects";
import { runParticipantSagas } from "./participant/Sagas";

const PARTICIPANT_ID = 408096;

export function* startup() {
  // TODO: Load configuration from query parameters.
}

export default function* root() {
  yield fork(startup);
  yield fork(runParticipantSagas, PARTICIPANT_ID);
}

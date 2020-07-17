import { fork, put } from "redux-saga/effects";
import { ParticipantActionTypes } from "./participant/Types";
import { watchFetchParticipant } from "./participant/Sagas";

export function* startup() {
  // TODO: Find some way to dynamically put the participant ID in here.
  yield put({
    type: ParticipantActionTypes.PARTICIPANT_FETCH_REQUESTED,
    id: 408096,
  });
}

export default function* root() {
  yield fork(startup);
  yield fork(watchFetchParticipant);
}

import * as actions from "./Actions";
import { call, put, takeEvery, delay, select, fork } from "redux-saga/effects";
import { fetchParticipantById } from "../../services/ExtraLife";
import { IParticipant, ParticipantId } from "../../models/IParticipant";
import { IRequestParticipantFetchAction } from "./Interfaces";
import { ParticipantActionTypes } from "./Types";
import { getParticipantId, isParticipantRequestInFlight } from "./Selectors";

const DELAY_IN_SECONDS = 60;

export function* retrieveParticipant(action: IRequestParticipantFetchAction) {
  try {
    const participant: IParticipant = yield call(
      fetchParticipantById,
      action.id
    );
    yield put(actions.successfulParticipantFetch(participant));
  } catch (err) {
    yield put(actions.failedParticipantFetch(err as Error));
  }
}

export function* tickUpdateParticipantTimer() {
  while (true) {
    const id: ParticipantId = yield select(getParticipantId);

    const lastRequestStillInFlight: boolean = yield select(
      isParticipantRequestInFlight
    );

    if (!lastRequestStillInFlight && id) {
      yield put(actions.requestParticipantFetch(id));
    }

    // Wake every second if id is undefined.
    let waitDelay = id ? DELAY_IN_SECONDS : 1;
    yield delay(waitDelay * 1000);
  }
}

export function* watchFetchParticipant() {
  yield takeEvery(
    ParticipantActionTypes.PARTICIPANT_FETCH_REQUESTED,
    retrieveParticipant
  );
}

export function* runParticipantSagas() {
  yield fork(watchFetchParticipant);
  yield fork(tickUpdateParticipantTimer);
}

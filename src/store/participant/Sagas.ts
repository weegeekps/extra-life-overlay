import * as actions from "./Actions";
import { call, put, takeEvery, delay, select, fork } from "redux-saga/effects";
import { fetchParticipantById } from "../../services/ExtraLife";
import { IParticipant, ParticipantId } from "../../models/IParticipant";
import { IRequestParticipantFetchAction } from "./Interfaces";
import { ParticipantActionTypes } from "./Types";
import { isRequestInFlight } from "./Selectors";

const DELAY_IN_SECONDS = 60;

export function* retrieveParticipant(action: IRequestParticipantFetchAction) {
  try {
    const participant: IParticipant = yield call(
      fetchParticipantById,
      action.id
    );
    yield put(actions.successfulParticipantFetch(participant));
  } catch (err) {
    yield put(actions.failedParticipantFetch(err));
  }
}

export function* tickUpdateParticipantTimer(id: ParticipantId) {
  while (true) {
    const lastRequestStillInFlight = yield select(isRequestInFlight);

    if (!lastRequestStillInFlight) {
      yield put(actions.requestParticipantFetch(id));
    }

    yield delay(DELAY_IN_SECONDS * 1000);
  }
}

export function* watchFetchParticipant() {
  yield takeEvery(
    ParticipantActionTypes.PARTICIPANT_FETCH_REQUESTED,
    retrieveParticipant
  );
}

export function* runParticipantSagas(id: ParticipantId) {
  yield fork(watchFetchParticipant);
  yield fork(tickUpdateParticipantTimer, id);
}

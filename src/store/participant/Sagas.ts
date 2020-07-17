import * as actions from "./Actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchParticipantById } from "../../services/ExtraLife";
import { IParticipant } from "../../models/IParticipant";
import { IRequestParticipantFetchAction } from "./Interfaces";
import { ParticipantActionTypes } from "./Types";

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

export function* watchFetchParticipant() {
  yield takeEvery(
    ParticipantActionTypes.PARTICIPANT_FETCH_REQUESTED,
    retrieveParticipant
  );
}

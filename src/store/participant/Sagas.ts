import * as actions from "./Actions";
import { call, put, takeEvery, delay, select, fork } from "redux-saga/effects";
import {
  fetchParticipantById,
  fetchParticipantMilestonesById,
} from "../../services/ExtraLife";
import { IParticipant, ParticipantId } from "../../models/IParticipant";
import { IRequestParticipantFetchAction } from "./Interfaces";
import { ParticipantActionTypes } from "./Types";
import {
  getFetchMilestones,
  getParticipantId,
  isParticipantRequestInFlight,
} from "./Selectors";
import { clamp } from "../../utils";

const DELAY_IN_SECONDS = 60;

export function* retrieveParticipant(action: IRequestParticipantFetchAction) {
  try {
    const participant: IParticipant = yield call(
      fetchParticipantById,
      action.id
    );
    if (action.fetchMilestones) {
      participant.milestones = yield call(
        fetchParticipantMilestonesById,
        action.id
      );

      participant.milestones.forEach((milestone) => {
        milestone.position = clamp(
          (milestone.fundraisingGoal / participant.fundraisingGoal) * 100,
          0,
          100
        );
      });
    } else {
      participant.milestones = [];
    }
    yield put(actions.successfulParticipantFetch(participant));
  } catch (err) {
    yield put(actions.failedParticipantFetch(err as Error));
  }
}

export function* tickUpdateParticipantTimer() {
  while (true) {
    const id: ParticipantId = yield select(getParticipantId);
    const fetchMilestones: boolean = yield select(getFetchMilestones);

    const lastRequestStillInFlight: boolean = yield select(
      isParticipantRequestInFlight
    );

    if (!lastRequestStillInFlight && id) {
      yield put(actions.requestParticipantFetch(id, fetchMilestones));
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

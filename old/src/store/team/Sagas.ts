import * as actions from "./Actions";
import { call, delay, put, select, takeEvery, fork } from "redux-saga/effects";
import { ITeam } from "../../models/ITeam";
import { fetchTeamById } from "../../services/ExtraLife";
import { IRequestTeamFetchAction } from "./Interfaces";
import { getTeamId, isTeamRequestInFlight } from "./Selectors";
import { TeamActionTypes } from "./Types";
import { ParticipantId } from "../../models/IParticipant";

// TODO: This and store/participant/Sagas.ts has a lot of repeat code that should be refactored.

const DELAY_IN_SECONDS = 60;

export function* retrieveTeam(action: IRequestTeamFetchAction) {
  try {
    const team: ITeam = yield call(fetchTeamById, action.id);
    yield put(actions.successfulTeamFetch(team));
  } catch (err) {
    yield put(actions.failedTeamFetch(err as Error));
  }
}

export function* tickUpdateTeamTimer() {
  while (true) {
    const id: ParticipantId = yield select(getTeamId);

    const lastRequestStillInFlight: boolean = yield select(
      isTeamRequestInFlight
    );

    if (!lastRequestStillInFlight && id) {
      yield put(actions.requestTeamFetch(id));
    }

    let waitDelay = id ? DELAY_IN_SECONDS : 1;
    yield delay(waitDelay * 1000);
  }
}

export function* watchFetchTeam() {
  yield takeEvery(TeamActionTypes.TEAM_FETCH_REQUESTED, retrieveTeam);
}

export function* runTeamSagas() {
  yield fork(watchFetchTeam);
  yield fork(tickUpdateTeamTimer);
}

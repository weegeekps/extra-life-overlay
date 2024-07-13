import {
  IRequestParticipantFetchAction,
  ISuccessfulParticipantFetchAction,
  IFailedParticipantFetchAction,
  ISetParticipantIdAction,
} from "./Interfaces";
import { ParticipantActionTypes } from "./Types";
import { ParticipantId, IParticipant } from "../../models/IParticipant";

export function setParticipantId(
  id: ParticipantId,
  fetchMilestones: boolean
): ISetParticipantIdAction {
  return {
    type: ParticipantActionTypes.PARTICIPANT_ID_SET,
    id,
    fetchMilestones,
  };
}

export function requestParticipantFetch(
  id: ParticipantId,
  fetchMilestones: boolean
): IRequestParticipantFetchAction {
  return {
    type: ParticipantActionTypes.PARTICIPANT_FETCH_REQUESTED,
    id,
    fetchMilestones,
  };
}

export function successfulParticipantFetch(
  participant: IParticipant
): ISuccessfulParticipantFetchAction {
  return {
    type: ParticipantActionTypes.PARTICIPANT_FETCH_SUCCESSFUL,
    participant,
  };
}

export function failedParticipantFetch(
  error: Error
): IFailedParticipantFetchAction {
  return {
    type: ParticipantActionTypes.PARTICIPANT_FETCH_FAILED,
    error,
  };
}

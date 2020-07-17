import {
  IRequestParticipantFetchAction,
  ISuccessfulParticipantFetchAction,
  IFailedParticipantFetchAction,
} from "./Interfaces";
import { ParticipantActionTypes } from "./Types";
import { ParticipantId, IParticipant } from "../../models/IParticipant";

export function requestParticipantFetch(
  id: ParticipantId
): IRequestParticipantFetchAction {
  return {
    type: ParticipantActionTypes.PARTICIPANT_FETCH_REQUESTED,
    id,
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

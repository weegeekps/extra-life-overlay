import {
  IRequestParticipantFetchAction,
  ISuccessfulParticipantFetchAction,
  IFailedParticipantFetchAction,
  ISetParticipantIdAction,
} from "./Interfaces";
import { ParticipantActionTypes } from "./Types";
import { ParticipantId, IParticipant } from "../../models/IParticipant";

export function setParticipantId(id: ParticipantId): ISetParticipantIdAction {
  return {
    type: ParticipantActionTypes.PARTICIPANT_ID_SET,
    id,
  };
}

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

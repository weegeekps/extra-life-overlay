import { ParticipantActionTypes } from "./Types";
import { IParticipant, ParticipantId } from "../../models/IParticipant";

export type ParticipantActions =
  | ISetParticipantIdAction
  | IRequestParticipantFetchAction
  | ISuccessfulParticipantFetchAction
  | IFailedParticipantFetchAction;

export interface ISetParticipantIdAction {
  readonly type: ParticipantActionTypes.PARTICIPANT_ID_SET;
  readonly id: ParticipantId;
}

export interface IRequestParticipantFetchAction {
  readonly type: ParticipantActionTypes.PARTICIPANT_FETCH_REQUESTED;
  readonly id: ParticipantId;
}

export interface ISuccessfulParticipantFetchAction {
  readonly type: ParticipantActionTypes.PARTICIPANT_FETCH_SUCCESSFUL;
  readonly participant: IParticipant;
}

export interface IFailedParticipantFetchAction {
  readonly type: ParticipantActionTypes.PARTICIPANT_FETCH_FAILED;
  readonly error: Error;
}

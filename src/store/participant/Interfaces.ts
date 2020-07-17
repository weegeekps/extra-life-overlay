import { ParticipantActionTypes } from "./Types";
import { IParticipant, ParticipantId } from "../../models/IParticipant";

export type ParticipantActions =
  | IRequestParticipantFetchAction
  | ISuccessfulParticipantFetchAction
  | IFailedParticipantFetchAction;

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

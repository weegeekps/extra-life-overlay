import { IParticipant, ParticipantId } from "./IParticipant";

export interface IParticipantState {
  isFetchingParticipant: boolean;
  id?: ParticipantId;
  value?: IParticipant;
}

export interface IAppState {
  participant: IParticipantState;
}

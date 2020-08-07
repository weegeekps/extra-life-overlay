import { IAppState } from "../../models/IAppState";

export const getParticipantId = (state: IAppState) => state.participant.id;

export const isRequestInFlight = (state: IAppState) =>
  state.participant.isFetchingParticipant;

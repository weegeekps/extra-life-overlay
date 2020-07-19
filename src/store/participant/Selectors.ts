import { IAppState } from "../../models/IAppState";

export const isRequestInFlight = (state: IAppState) =>
  state.participant.isFetchingParticipant;

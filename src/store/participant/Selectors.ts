import { IAppState } from "../../models/IAppState";

export const getParticipantId = (state: IAppState) => state.participant.id;

export const getFetchMilestones = (state: IAppState) =>
  state.participant.fetchMilestones;

export const isParticipantRequestInFlight = (state: IAppState) =>
  state.participant.isFetchingParticipant;

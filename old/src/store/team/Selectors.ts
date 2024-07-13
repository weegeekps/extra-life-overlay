import { IAppState } from "../../models/IAppState";

export const getTeamId = (state: IAppState) => state.team.id;

export const isTeamRequestInFlight = (state: IAppState) =>
  state.team.isFetchingTeam;

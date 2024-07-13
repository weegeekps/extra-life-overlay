import { ITeam, TeamId } from "../../models/ITeam";
import {
  IFailedTeamFetchAction,
  IRequestTeamFetchAction,
  ISetTeamIdAction,
  ISuccessfulTeamFetchAction,
} from "./Interfaces";
import { TeamActionTypes } from "./Types";

export function setTeamId(id: TeamId): ISetTeamIdAction {
  return {
    type: TeamActionTypes.TEAM_ID_SET,
    id,
  };
}

export function requestTeamFetch(id: TeamId): IRequestTeamFetchAction {
  return {
    type: TeamActionTypes.TEAM_FETCH_REQUESTED,
    id,
  };
}

export function successfulTeamFetch(team: ITeam): ISuccessfulTeamFetchAction {
  return {
    type: TeamActionTypes.TEAM_FETCH_SUCCESSFUL,
    team,
  };
}

export function failedTeamFetch(error: Error): IFailedTeamFetchAction {
  return {
    type: TeamActionTypes.TEAM_FETCH_FAILED,
    error,
  };
}

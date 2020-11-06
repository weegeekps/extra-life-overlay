import { ITeam, TeamId } from "../../models/ITeam";
import { TeamActionTypes } from "./Types";

export type TeamActions =
  | ISetTeamIdAction
  | IRequestTeamFetchAction
  | ISuccessfulTeamFetchAction
  | IFailedTeamFetchAction;

export interface ISetTeamIdAction {
  readonly type: TeamActionTypes.TEAM_ID_SET;
  readonly id: TeamId;
}

export interface IRequestTeamFetchAction {
  readonly type: TeamActionTypes.TEAM_FETCH_REQUESTED;
  readonly id: TeamId;
}

export interface ISuccessfulTeamFetchAction {
  readonly type: TeamActionTypes.TEAM_FETCH_SUCCESSFUL;
  readonly team: ITeam;
}

export interface IFailedTeamFetchAction {
  readonly type: TeamActionTypes.TEAM_FETCH_FAILED;
  readonly error: Error;
}

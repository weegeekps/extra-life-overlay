import { ITeamState } from "../../models/IAppState";
import { TeamActions } from "./Interfaces";
import { TeamActionTypes } from "./Types";

export function team(
  state: ITeamState = {
    isFetchingTeam: false,
  },
  action: TeamActions
) {
  switch (action.type) {
    case TeamActionTypes.TEAM_ID_SET:
      return {
        ...state,
        id: action.id,
      };
    case TeamActionTypes.TEAM_FETCH_REQUESTED:
      return {
        ...state,
        isFetchingTeam: true,
      };
    case TeamActionTypes.TEAM_FETCH_SUCCESSFUL:
      return {
        ...state,
        value: action.team,
        isFetchingTeam: false,
      };
    case TeamActionTypes.TEAM_FETCH_FAILED:
      return {
        ...state,
        isFetchingTeam: false,
      };
    default:
      return state;
  }
}

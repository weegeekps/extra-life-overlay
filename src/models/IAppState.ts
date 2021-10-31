import { IParticipant, ParticipantId } from "./IParticipant";
import { ITeam, TeamId } from "./ITeam";

export interface IParticipantState {
  isFetchingParticipant: boolean;
  id?: ParticipantId;
  value?: IParticipant;
  fetchMilestones: boolean;
}

export interface ITeamState {
  isFetchingTeam: boolean;
  id?: TeamId;
  value?: ITeam;
}

export interface IAppState {
  participant: IParticipantState;
  team: ITeamState;
}

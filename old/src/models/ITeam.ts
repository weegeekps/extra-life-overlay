export type TeamId = number;

export interface ITeamLinks {
  page: string;
  stream: string;
}

export interface ITeam {
  avatarImageUrl: string;
  captainDisplayName: string;
  createdDateUTC: string;
  eventId: number;
  eventName: string;
  fundraisingGoal: number;
  isInviteOnly: boolean;
  links: ITeamLinks;
  name: string;
  numDonations: number;
  numParticipants: number;
  streamIsLive: boolean;
  sumDonations: number;
  teamId: TeamId;
}

export type ParticipantId = number;

export interface IParticipantMilestone {
  fundraisingGoal: number;
  description: string;
  milestoneId: string;
  isActive: boolean;
  isComplete: boolean;
}

export interface IParticipantLinks {
  donate: string;
  stream: string;
  page: string;
}

export interface IParticipant {
  displayName: string;
  fundraisingGoal: number;
  participantId: ParticipantId;
  eventName: string;
  avatarImageUrl: string;
  streamIsLife: string;
  links: IParticipantLinks;
  createdDateUTC: string;
  eventId: number;
  sumDonations: number;
  sumPledges: number;
  numDonations: number;
  milestones: IParticipantMilestone[];
}

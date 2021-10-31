import {
  IParticipant,
  IParticipantMilestone,
  ParticipantId,
} from "../models/IParticipant";
import { ITeam, TeamId } from "../models/ITeam";

const API_HOST = "www.extra-life.org";

export function fetchParticipantById(
  participantId: ParticipantId
): Promise<IParticipant> {
  return fetch(`https://${API_HOST}/api/participants/${participantId}`)
    .then((r) => r.json())
    .catch((e) =>
      console.error(`Fetch participant by id failed. Reason: ${e}`)
    );
}

export function fetchParticipantMilestonesById(
  participantId: ParticipantId
): Promise<IParticipantMilestone[]> {
  return fetch(
    `https://${API_HOST}/api/participants/${participantId}/milestones`
  )
    .then((r) => r.json())
    .catch((e) =>
      console.error(`Fetch participant milestones by id failed. Reason: ${e}`)
    );
}

export function fetchTeamById(teamId: TeamId): Promise<ITeam> {
  return fetch(`https://${API_HOST}/api/teams/${teamId}`)
    .then((r) => r.json())
    .catch((e) => console.error(`Fetch team by id failed. Reason: ${e}`));
}

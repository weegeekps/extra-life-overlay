import { IParticipant, ParticipantId } from "../models/IParticipant";

export function fetchParticipantById(
  participantId: ParticipantId
): Promise<IParticipant> {
  return fetch(`https://www.extra-life.org/api/participants/${participantId}`)
    .then((r) => r.json())
    .catch((e) =>
      console.error(`Fetch participant by id failed. Reason: ${e}`)
    );
}

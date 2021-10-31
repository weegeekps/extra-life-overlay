import { ParticipantActions } from "./Interfaces";
import { IParticipantState } from "../../models/IAppState";
import { ParticipantActionTypes } from "./Types";

export function participant(
  state: IParticipantState = {
    isFetchingParticipant: false,
  },
  action: ParticipantActions
) {
  switch (action.type) {
    case ParticipantActionTypes.PARTICIPANT_ID_SET:
      return {
        ...state,
        id: action.id,
      };
    case ParticipantActionTypes.PARTICIPANT_FETCH_REQUESTED:
      return {
        ...state,
        isFetchingParticipant: true,
      };
    case ParticipantActionTypes.PARTICIPANT_FETCH_SUCCESSFUL:
      return {
        ...state,
        value: action.participant,
        isFetchingParticipant: false,
      };
    case ParticipantActionTypes.PARTICIPANT_FETCH_FAILED:
      return {
        ...state,
        isFetchingParticipant: false,
      };
    default:
      return state;
  }
}

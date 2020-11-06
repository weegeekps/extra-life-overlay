import { combineReducers } from "redux";
import { participant } from "./participant/Reducers";
import { team } from "./team/Reducers";

export default combineReducers({
  participant,
  team,
});

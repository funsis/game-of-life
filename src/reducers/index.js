import { combineReducers } from "redux";
import boardReducer from "./boardReducer/boardReducer";

const rootReducer = combineReducers({
  board: boardReducer
})

export default rootReducer;

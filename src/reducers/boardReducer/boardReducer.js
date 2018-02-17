import { CREATE_BOARD } from "../../actions/types";

const boardReducer = (state = {}, action) => {
  switch(action.type) {
    case CREATE_BOARD:
      return action.payload;
    default:
      return state;
  }
}

export default boardReducer;

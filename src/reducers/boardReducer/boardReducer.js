import { CREATE_BOARD, CHANGE_CELL_STATE } from "../../actions/types";

const boardReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return action.payload;

    case CHANGE_CELL_STATE: {
      const newCells = state.cells.map((row, rowId) =>
        row.map((cell, colId) => {
          if (
            rowId === action.payload.rowId &&
            colId === action.payload.colId
          ) {
            return cell === 0 ? 1 : 0;
          }

          return cell;
        })
      );

      return {...state, cells: newCells}
    }
    default:
      return state;
  }
};

export default boardReducer;

import {
  CREATE_BOARD,
  CHANGE_CELL_STATE,
  CHANGE_GENERATION,
  CLEAR_BOARD
} from "../../actions/types";

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

      return { ...state, cells: newCells };
    }

    case CHANGE_GENERATION: {
      const checkNeighbors = (rowId, colId) => {
        let neighbors = 0;

        for (let i = rowId - 1; i <= rowId + 1; i++) {
          for (let j = colId - 1; j <= colId + 1; j++) {
            //Исключаем проверяемый элемент
            if (i === rowId && j === colId) continue;

            let posI = i;
            let posJ = j;

            //Проверка на крайние клетки поля
            if (posI === -1) posI = state.cells.length - 1;
            if (posJ === -1) posJ = state.cells[0].length - 1;
            if (posI === state.cells.length) posI = 0;
            if (posJ === state.cells[0].length) posJ = 0;

            if (state.cells[posI][posJ] !== 0) neighbors += 1;
          }
        }

        return neighbors;
      };

      let nextGeneration = state.cells.map((row, rowId) =>
        row.map((cell, colId) => {
          const neighbors = checkNeighbors(rowId, colId);

          if (neighbors < 2 || neighbors > 3) {
            return 0;
          } else {
            if (cell !== 0) return 2;

            return neighbors === 3 ? 1 : 0;
          }
        })
      );

      return { ...state, cells: nextGeneration };
    }

    case CLEAR_BOARD: {
      const clearedBoard = state.cells.map(row => (
        row.map(cell => 0)
      ));

      return { ...state, cells: clearedBoard };
    }

    default:
      return state;
  }
};

export default boardReducer;

import {
  CREATE_BOARD,
  CHANGE_CELL_STATE,
  CHANGE_GENERATION,
  CLEAR_BOARD
} from "./types";

export const createBoard = (rows, cols, cellSize = "12px") => {
  let board = [];
  let row = [];

  for (let i = 0; i < cols; i++) {
    row.push(0);
  }

  for (let i = 0; i < rows; i++) {
    board.push(row);
  }

  return {
    type: CREATE_BOARD,
    payload: {
      width: cols,
      height: rows,
      cellSize: cellSize,
      cells: board
    }
  };
};

export const changeCellState = (rowId, colId) => ({
  type: CHANGE_CELL_STATE,
  payload: {
    rowId,
    colId
  }
});

export const changeGeneration = () => ({ type: CHANGE_GENERATION });

export const clearBoard = () => ({ type: CLEAR_BOARD });

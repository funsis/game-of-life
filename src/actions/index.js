import { CREATE_BOARD } from "./types";

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

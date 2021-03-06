import {
  CREATE_BOARD,
  CHANGE_CELL_STATE,
  CHANGE_GENERATION,
  CLEAR_BOARD,
  RANDOMIZE_BOARD
} from "../../actions/types";
import boardReducer from "./boardReducer";

describe("boardReducer:", () => {
  it("reducer for CREATE_BOARD", () => {
    const state = boardReducer([], {
      type: CREATE_BOARD,
      payload: {
        width: 2,
        height: 2,
        cellSize: "5px",
        cells: [[0, 0], [0, 0]]
      }
    });
    const expected = {
      width: 2,
      height: 2,
      cellSize: "5px",
      cells: [[0, 0], [0, 0]]
    };

    expect(state).toEqual(expected);
  });

  it("reducer for CHANGE_CELL_STATE", () => {
    const state = {
      width: 2,
      height: 2,
      cellSize: "5px",
      cells: [[0, 0], [0, 0]]
    };

    const actual = boardReducer(state, {
      type: CHANGE_CELL_STATE,
      payload: { rowId: 1, colId: 1 }
    });

    const expected = {
      width: 2,
      height: 2,
      cellSize: "5px",
      cells: [[0, 0], [0, 1]]
    };

    expect(actual).toEqual(expected);
  });

  it("reducer for CHANGE_GENERATION", () => {
    const state = {
      width: 4,
      height: 3,
      cellSize: "5px",
      cells: [[0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    };

    const actual = boardReducer(state, { type: CHANGE_GENERATION });

    const expected = {
      width: 4,
      height: 3,
      cellSize: "5px",
      cells: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    };

    expect(actual).toEqual(expected);
  });

  it("reducer for CLEAR_BOARD", () => {
    const state = {
      width: 2,
      height: 2,
      cellSize: "5px",
      cells: [[1, 1], [1, 1]]
    };

    const expected = {
      width: 2,
      height: 2,
      cellSize: "5px",
      cells: [[0, 0], [0, 0]]
    };

    const actual = boardReducer(state, { type: CLEAR_BOARD });
  });

  it("reducer for RANDOMIZE_BOARD", () => {
    const state = {
      width: 4,
      height: 3,
      cellSize: "5px",
      cells: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    };

    const actual = boardReducer(state, { type: RANDOMIZE_BOARD });

    expect(actual).not.toEqual(state);
  })
});

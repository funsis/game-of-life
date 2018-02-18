import { createBoard, changeCellState, changeGeneration } from "./index";
import { CREATE_BOARD, CHANGE_CELL_STATE, CHANGE_GENERATION } from "./types";

describe("ACTIONS:", () => {
  it("action creator createBoard", () => {
    const expected = {
      type: CREATE_BOARD,
      payload: {
        width: 2,
        height: 2,
        cellSize: "15px",
        cells: [[0, 0], [0, 0]]
      }
    };
    const actual = createBoard(2, 2, "15px");

    expect(actual).toEqual(expected);
  });

  it("action creator CHANGE_CELL_STATE", () => {
    const expected = {
      type: CHANGE_CELL_STATE,
      payload: {
        rowId: 2,
        colId: 2
      }
    };
    const actual = changeCellState(2, 2);

    expect(actual).toEqual(expected);
  });

  it("action creator CHANGE_GENERATION", () => {
    const expected = { type: CHANGE_GENERATION };
    const actual = changeGeneration();

    expect(actual).toEqual(expected);
  });
});

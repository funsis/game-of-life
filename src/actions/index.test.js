import { createBoard } from "./index";
import { CREATE_BOARD } from "./types";

describe("ACTIONS:", () => {
    it("actionCreator createBoard", () => {
      const expected = {
        type: CREATE_BOARD,
        payload: {
          colSize: 2,
          rowSize: 2,
          cells: [[0, 0], [0, 0]]
        }
      };
      const actual = createBoard(2, 2);

      expect(actual).toEqual(expected);
    })
})

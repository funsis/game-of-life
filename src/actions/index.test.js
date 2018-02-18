import { createBoard } from "./index";
import { CREATE_BOARD } from "./types";

describe("ACTIONS:", () => {
    it("actionCreator createBoard", () => {
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
    })
})

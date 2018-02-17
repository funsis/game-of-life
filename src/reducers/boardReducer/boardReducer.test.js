import { CREATE_BOARD } from "../../actions/types";
import boardReducer from "./boardReducer";

describe("boardReducer:", () => {
  it("reducer for CREATE_BOARD", () => {
    let state = boardReducer([], {type: CREATE_BOARD, payload: [[0, 0], [0, 0]]});

    expect(state).toEqual([[0, 0], [0, 0]]);
  })
})

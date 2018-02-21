import React from "react";
import configureStore from "redux-mock-store";
import { shallow } from "enzyme";
import Board from "./Board";
import {
  createBoard,
  changeCellState,
  changeGeneration
} from "../../actions/index";
import {
  CREATE_BOARD,
  CHANGE_CELL_STATE,
  CHANGE_GENERATION
} from "../../actions/types";

describe("BOARD CONTAINER:", ()=> {
  const initialState = { board: {} };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<Board store={store} />);
  });

  it("render container without crashing", () => {
    expect(container.length).toEqual(1);
  })

  it("check prop matches with initial state", () => {
    expect(container.prop("board")).toEqual(initialState.board);
  })

  it("chec actions on dispatching", () => {
    let actions;
    store.dispatch(createBoard(20, 20));
    store.dispatch(changeCellState(0, 0));
    store.dispatch(changeGeneration());

    actions = store.getActions();

    expect(actions[0].type).toEqual(CREATE_BOARD);
    expect(actions[1].type).toEqual(CHANGE_CELL_STATE);
    expect(actions[2].type).toEqual(CHANGE_GENERATION);
  })
});

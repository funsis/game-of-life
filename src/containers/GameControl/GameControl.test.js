import React from "react";
import configureStore from "redux-mock-store";
import { shallow } from "enzyme";
import GameControl from "./GameControl";
import {
  CLEAR_BOARD,
  RANDOMIZE_BOARD,
  CHANGE_GENERATION
} from "../../actions/types";
import {
  clearBoard,
  randomizeBoard,
  changeGeneration
} from "../../actions/index";

describe("GameControl container:", ()=> {
  const initialState = { board: {} };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<GameControl store={store} />);
  });

  it("render container without crashing", () => {
    expect(container.length).toEqual(1);
  });

  it("check prop matches with initial state", () => {
    expect(container.prop("board")).toEqual(initialState.board);
  });

  it("check actions on dispatching", () => {
    let actions;

    store.dispatch(clearBoard());
    store.dispatch(randomizeBoard());
    store.dispatch(changeGeneration());

    actions = store.getActions()

    expect(actions[0].type).toEqual(CLEAR_BOARD);
    expect(actions[1].type).toEqual(RANDOMIZE_BOARD);
    expect(actions[2].type).toEqual(CHANGE_GENERATION);
  });
});

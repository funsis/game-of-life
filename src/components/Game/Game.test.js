import React from "react";
import { shallow } from "enzyme";
import Game from "./Game";

describe("GAME:", () => {
  it("render component without crashing", () => {
    shallow(<Game />);
  });
});

import React from "react";
import { shallow } from "enzyme";
import Notice from "./Notice";

describe("NOTICE:", () => {
  it("render component without crashing", () => {
    shallow(<Notice />);
  });
});

import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("HEADER:", () => {
  it("render component without crashing", () => {
    shallow(<Header />);
  });
});

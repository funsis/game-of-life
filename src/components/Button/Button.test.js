import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("BUTTON:", () => {
  it("render component without crashing", () => {
    shallow(<Button name="Some Name" />)
  });
});

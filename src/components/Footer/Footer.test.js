import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("FOOTER:", () => {
  it("render component without crashing", () => {
    shallow(<Footer />);
  });
});

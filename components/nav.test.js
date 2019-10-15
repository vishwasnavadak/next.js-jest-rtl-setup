import React from "react";
import { render, cleanup } from "@testing-library/react";
import Nav from "./nav";

afterEach(cleanup);

describe("first", () => {
  it("runs", () => {
    const { container } = render(<Nav />);
    expect(container.getElementsByTagName("ul")).toHaveLength(1);
  });
});

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageNotFound from '../page-not-found';

describe("<PageNotFound />", () => {
  it("renders <PageNotFound /> component in root", () => {
    render(<PageNotFound />);
  });
});

import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import PageNotFound from '../page-not-found';

jest.mock("highcharts/highcharts-3d");

Enzyme.configure({ adapter: new Adapter() });
describe("<PageNotFound />", () => {
  it("renders <PageNotFound /> component in root", () => {
    shallow(<PageNotFound />);
  });
});

import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import Dashboard from "../dashboard-page";

jest.mock("highcharts/highcharts-3d");

Enzyme.configure({ adapter: new Adapter() });
describe("<Dashboard />", () => {
  it("renders <Dashboard /> component in root", () => {
    shallow(<Dashboard />);
  });
});

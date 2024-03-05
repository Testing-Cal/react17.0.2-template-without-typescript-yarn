import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import Listing from '../listing-page';

jest.mock("highcharts/highcharts-3d");

Enzyme.configure({ adapter: new Adapter() });
describe("<Listing />", () => {
  it("renders <Listing /> component in root", () => {
    shallow(<Listing />);
  });
});

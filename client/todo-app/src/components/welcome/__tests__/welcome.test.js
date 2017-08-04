import React from 'react';
import { mount } from "enzyme";
import Welcome from './../welcome';

describe("Welcome", () => {
    it("has correct class", () => {
        expect(mount(<Welcome />).find("div").first()).toHaveClassName("welcome-text");
    });
});

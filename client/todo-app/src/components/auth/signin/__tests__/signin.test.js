import React from "react";
import { mount } from "enzyme";
import Signin from "./../signin";

describe("Signin", () => {
    let signinComponent;

    beforeEach(() => {
        signinComponent = mount(<Signin />);
    });

    it("has correct class", () => {
        expect(signinComponent.find("div").first()).toHaveClassName("sign-in");
    });
});

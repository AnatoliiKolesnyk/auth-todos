import React from "react";
import { mount } from "enzyme";
import Signup from "./../signup";

describe("Signout", () => {
    let signupComponent;

    beforeEach(() => {
        signupComponent = mount(<Signup />);
    });

    it("has correct class", () => {
        expect(signupComponent.find("div").first()).toHaveClassName("sign-up");
    });
});

import React from "react";
import { mount } from "enzyme";
import Signout from "./../signout";

describe("Signout", () => {
    let signoutComponent;

    beforeEach(() => {
        signoutComponent = mount(<Signout />);
    });

    it("has correct class", () => {
        expect(signoutComponent.find("div").first()).toHaveClassName("sign-out");
    });
});

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

    it("has sign in form", () => {
        expect(signinComponent.find("form").first()).toHaveClassName("sign-in-form");
    });

    it("has email input in form", () => {
        expect(signinComponent.find('form.sign-in-form input[name="email"]').length).toBe(1);
    });

    it("has password input in form", () => {
        expect(signinComponent.find('form.sign-in-form input[name="password"]').length).toBe(1);
    });

    it("has submit button in form", () => {
        expect(signinComponent.find('form.sign-in-form button[action="submit"]').length).toBe(1);
    });
});

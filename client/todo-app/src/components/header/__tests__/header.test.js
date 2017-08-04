import React from 'react';
import { mount } from "enzyme";
import Header from './../header';
import { getComponentInRouter } from "./../../../setupTests";

describe("Header", () => {
    let header;

    beforeEach(() => {
        header = mount(getComponentInRouter(Header, { authenticated: false }));
    });

    it("has correct CSS classes", () => {
        expect(header.find("nav")).toHaveClassName("navbar navbar-light");
    });

    it("has logo", () => {
        expect(header.find("img.header-logo").length).toBe(1);
    });

    it("has only SignOut button when signed in", () => {
        header = mount(getComponentInRouter(Header, { authenticated: true }));
        const signOutBtn = header.find("a.nav-link");
        expect(signOutBtn.length).toBe(1);
        expect(signOutBtn.text()).toBe("Sign Out");
    });

    it("has 2 buttons when signed out", () => {
        const signOutBtn = header.find("a.nav-link");
        expect(signOutBtn.length).toBe(2);
    });

    it("has correct CSS classes", () => {
        expect(header.find("nav")).toHaveClassName("navbar navbar-light");
    });
});

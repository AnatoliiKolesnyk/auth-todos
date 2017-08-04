import React from 'react';
import { mount } from "enzyme";
import App from './../app';
import { getComponentInRouter } from "./../../../setupTests";

describe("App component", () => {
    let appComponent;

    beforeEach(() => {
        appComponent = mount(getComponentInRouter(App));
    });

    it("shows header", () => {
        expect(appComponent.find(".header").length).toBe(1);
    });

    it('shows todo form', () => {
        expect(appComponent.find(".todo-form").length).toBe(1);
    });

    it('shows todos list', () => {
        expect(appComponent.find(".todos-list").length).toBe(1);
    });
});

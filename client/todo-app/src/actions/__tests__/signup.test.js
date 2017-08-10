import { signupUser } from "../index";
import { AUTH_USER, AUTH_ERROR } from "../types";

describe("'Sign Up' action creator", () => {    
    it("returns correct action type for correct credentials", () => {
        const actionCreator = signupUser({
            email: "test@example.com",
            password: "testtest"
        });
        const dispatch = jest.fn(value => value);
        expect(actionCreator).toBeInstanceOf(Function);
        const request = actionCreator(dispatch);
        expect(request).toBeInstanceOf(Promise);
        request.then(() => expect(dispatch.mock.calls[0][0]).toMatchObject({ type: AUTH_USER }));
    });

    it("returns correct action type for wrong credentials", () => {
        const actionCreator = signupUser({
            email: "test@example.com",
            password: "not correct"
        });
        const dispatch = jest.fn(value => value);
        expect(actionCreator).toBeInstanceOf(Function);
        const request = actionCreator(dispatch);
        expect(request).toBeInstanceOf(Promise);
        request.then(() => expect(dispatch.mock.calls[0][0]).toMatchObject({ type: AUTH_ERROR }));
    });
});

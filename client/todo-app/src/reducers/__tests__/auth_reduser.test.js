import authReducer from "../auth_reducer";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from "../../actions/types";

describe("Auth Reducer", () => {
    it("handles action with unknown type", () => {
        expect(authReducer(undefined, {})).toMatchObject({});
    });
    it("handles action 'AUTH_USER'", () => {
        const action = {
            type: AUTH_USER
        };
        expect(authReducer({}, action)).toMatchObject({ error: "", authenticated: true });
    });
    it("handles action 'UNAUTH_USER'", () => {
        const action = {
            type: UNAUTH_USER
        };
        expect(authReducer({}, action)).toMatchObject({ error: "", authenticated: false });
    });
    it("handles action 'AUTH_ERROR'", () => {
        const action = {
            type: AUTH_ERROR,
            payload: "test"
        };
        expect(authReducer({}, action)).toMatchObject({ error: "test" });
    });
});

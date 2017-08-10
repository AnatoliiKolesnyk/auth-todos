import { signoutUser } from "../index";
import { UNAUTH_USER } from "../types";


describe("'Sign Out' action creator", () => {
    it("returns correct action type", () => {
        expect(signoutUser()).toMatchObject({ type: UNAUTH_USER });
    });
});

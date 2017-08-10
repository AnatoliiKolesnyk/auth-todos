import axios from "axios";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from "./types";

const ROOT_URL = "http://localhost:3333";

export function signinUser({ email, password }) {
    return dispatch => authenticate(email, password, "signin", dispatch);
}

export function signoutUser() {
    localStorage.removeItem("token");

    return {
        type: UNAUTH_USER
    };
}

export function signupUser({ email, password }) {
    return dispatch => authenticate(email, password, "signup", dispatch);
}

function authenticate(email, password, endpoint, dispatch) {
    // Submit email/pass to server
    const request = axios.post(`${ ROOT_URL}/${ endpoint }`, { email, password });
    request.then(response => {
        // If response good:
        // - Update state to indicate that user is authenticated
        dispatch({ type: AUTH_USER });

        // Save JWT token
        localStorage.setItem("token", response.data.token);

        // Redirect to appropriate page
        this.props.history.push("/");
    });
    request.catch(error => {
        // If request is bad:
        // - Show an error to the user
        dispatch(authError(error.response && error.response.data && error.response.data.error || "Bad Login Info"));
    });
    return request;
}

function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

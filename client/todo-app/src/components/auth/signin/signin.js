import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signinUser } from "../../../actions";

class Signin extends Component {
    componentWillMount() {
        if (this.props.authenticated) {
            this.props.history.push("/");
        }
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="sign-in">
                <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }
                      className="sign-in-form"
                >
                    <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        label="Email"
                        component={ this.renderInput }
                    />
                    <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        label="Password"
                        required="true"
                        component={ this.renderInput }
                    />
                    { this.renderAlert() }
                    <button action="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        );
    }

    handleFormSubmit({ email, password }) {
        // Need to log user in
        this.props.signinUser({ email, password });
    }

    renderInput(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${ touched && error ? "has-danger" : "" }`;

        return (
            <fieldset className="{ className }">
                <label>{ field.label }</label>
                <input
                    type={ field.type || "text" }
                    placeholder={ field.placeholder }
                    className="form-control"
                    required={ field.required }
                    { ...field.input }
                />
                <div className="text-help">
                    { touched ? error : "" }
                </div>
            </fieldset>
        );
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> { this.props.errorMessage }
                </div>
            );
        }
    }
}

function validate(values) {
    // values = { email: "...", password: "..." }
    const errors = {};

    // Validate values from 'values' object
    if (!values.email) {
        errors.email = "Email is required";
    }
    if (!values.password) {
        errors.password = "Password is required";
    }

    return errors;
}

function mapStateToProps({ auth: { error: errorMessage, authenticated } }) {
    return { errorMessage, authenticated };
}

export default reduxForm({
    form: "signin",
})(
    connect(mapStateToProps, { signinUser })(Signin)
);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
            <nav className="header navbar navbar-light">
                <Link to="/" className="navbar-brand">
                    <img className="header-logo" src={ logo } alt="Todos" />
                </Link>
                <ul className="nav-links nav navbar-nav">
                    { this.renderLinks() }
                </ul>
            </nav>
        );
    }

    renderLinks() {
        if (this.props.authenticated) {
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/signout">Sign Out</Link>
                </li>
            );
        }
        return [
            (<li className="nav-item" key="1">
                <Link className="nav-link" to="/signin">Sign In</Link>
            </li>),
            (<li className="nav-item" key="2">
                <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>),
        ];
    }
}

export default Header;

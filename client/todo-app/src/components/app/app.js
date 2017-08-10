import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./../header/header";
import Welcome from './../welcome/welcome';
import Signin from './../auth/signin/signin';
import Signout from './../auth/signout/signout';
import Signup from './../auth/signup/signup';
// import Todos from './components/todos/todos';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/signin" component={ Signin } />
                        <Route path="/signout" component={ Signout } />
                        <Route path="/signup" component={ Signup } />
                        <Route path="/" component={ Welcome } />
                    </Switch>
                </div>
        	</BrowserRouter>
        );
    }
}

// <Route path="feature" component={ RequireAuth(Todos) }/>

export default App;

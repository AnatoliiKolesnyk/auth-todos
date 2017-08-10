import React from 'react';
import 'jest-enzyme';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, IndexRoute } from "react-router-dom";
import { createBrowserHistory } from "history";
import reducers from "./reducers";

const localStorageMock = {
  getItem: jest.fn(),
  removeItem:  jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);
const browserHistory = createBrowserHistory();

function getComponentInRouter(ComponentClass, props) {
    return (
        <Provider store={ store }>
        	<Router history={browserHistory}>
        		<ComponentClass { ...props } />
        	</Router>
        </Provider>
    );
}

export { getComponentInRouter };

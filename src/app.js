import css from "./app.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, hashHistory, browserHistory } from "react-router";

import { Provider } from 'react-redux';
import { reducer } from './reducers/rdc.app';

// Components
import App from './components/App/App';
import Home from './components/Home/Home';
import Youth from './components/Youth/Youth';
import Mva from "./components/Mva/Mva";

const createStoreWithMiddleware = applyMiddleware()(createStore);
 
ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="/youth" component={Youth} />
        <Route path="/mva" component={Mva} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);

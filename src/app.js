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
      <Route path="/" component={App}>
        <Route path="/new_wip/" component={Home} />
        <Route path="/new_wip/youth" component={Youth} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);

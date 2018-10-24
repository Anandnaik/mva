import css from "./app.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, hashHistory, browserHistory } from "react-router";

import { Provider } from 'react-redux';
import { reducer } from './reducers/rdc.app';


const isProd = process.env.NODE_ENV === 'production';
export const new_wip = isProd ? '/new_wip' : '';
console.log("new_wip: ", new_wip);

// Components
import App from './components/App/App';
import Home from './components/Home/Home';
import Youth from './components/Youth/Youth';
import Mva from "./components/Mva/Mva";
import AlreadyRegistered from "./components/AlreadyRegistered/AlreadyRegistered";
import ContactUs from "./components/ContactUs/ContactUs";


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
        <Route path={`${new_wip}/`} component={Home} />
        <Route path={`${new_wip}/youth`} component={Youth} />
        <Route path={`${new_wip}/mva`} component={Mva} />
        <Route
          path={`${new_wip}/already-registered`}
          component={AlreadyRegistered}
        />
        <Route path={`${new_wip}/contact-us`} component={ContactUs} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);

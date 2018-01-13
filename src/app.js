import css from './app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './components/App/App';
import MainContent from './components/MainContent/MainContent';

import { reducer } from './reducers/rdc.app';

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
        <Route path="/" component={MainContent} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);

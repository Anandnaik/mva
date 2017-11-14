import css from './app.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './components/App/App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

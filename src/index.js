import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';

import rootReducer from './redux';

import sessionsMiddleware from './redux/sessions/middleware';
import weatherMiddleware from './redux/weather/middleware';

import Home from './containers/Home';
import './index.scss';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sessionsMiddleware, weatherMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

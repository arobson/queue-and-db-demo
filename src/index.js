import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './index.css'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Reducer from './reducer'
import App from './App'

import * as serviceWorker from './serviceWorker';

const history = createHistory();
const reducer = Reducer(history);

// const createStoreWithMiddleware = applyMiddleware(thunk, routerMiddleware(history))(createStore);
// const store = createStoreWithMiddleware(reducer);
// const rootElement = document.getElementById('root');

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducer)
const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store} >
      <Router history={history}>
        <App />
      </Router>
  </Provider>,
  rootElement
);

serviceWorker.unregister();
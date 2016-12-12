import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// Middlewares
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from 'remote-redux-devtools';
const composeEnhancers = composeWithDevTools({realtime: true});
const store = createStore(reducers,composeEnhancers(
  applyMiddleware(promiseMiddleware)
));

// React router
import { Router, browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));

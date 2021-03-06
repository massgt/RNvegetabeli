import {createStore, applyMiddleware} from 'redux';
import rpm from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import Thunk from 'redux-thunk';

import reducers from './Reducers/index';

const logger = createLogger();
const enhancers = applyMiddleware(logger, rpm, Thunk);
const store = createStore(reducers, enhancers);

export default store;

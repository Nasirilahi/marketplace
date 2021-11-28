import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers';

const initialStore = {};

export default function configureStore(initialState = initialStore) {
  return createStore(rootReducer, initialState, applyMiddleware(logger, thunk));
}

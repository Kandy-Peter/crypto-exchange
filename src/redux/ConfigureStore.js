import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './cryptos.js/Crypto';

const reducer = combineReducers({
  reducers,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;

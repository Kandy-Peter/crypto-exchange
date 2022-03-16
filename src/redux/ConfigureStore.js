import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers, { fecthCryptos } from './cryptos/Crypto';

const reducer = combineReducers({
  reducers,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(fecthCryptos());

export default store;

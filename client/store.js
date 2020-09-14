import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk'

// we are adding composeWithDevTools here to get easy access to the Redux dev tools

// Globalized state
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
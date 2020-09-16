import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers/combineReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
// thunk is a Redux middleware that allows for asynchronus functionality in our actions (eg. fetch calls)
// documentation and resources here: https://github.com/reduxjs/redux-thunk
// helpful step by step guide to using thunk: https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
import thunk from 'redux-thunk'


// Redux only accepts one "store enhancer", so we must use this variable in order to pass both composeWithDevTools and middleware to our store
// https://github.com/jhen0409/react-native-debugger/issues/280

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  // composeEnhancer(applyMiddleware(thunk)),
  composeWithDevTools()
);

export default store;


/*USING REDUX THUNK*/

// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import reducers from './reducers/index';

// // we are adding composeWIthDevTools here to get easy access to the Redux dev tools
// const store = createStore(
//   reducers,
//   applyMiddleware(thunk),
//   // composeWithDevTools(),
// );

// export default store;
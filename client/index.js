import React from 'react';
import App from './App.jsx';
import { render } from 'react-dom';
import './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

render(
  // App is wrapped in provider in its own file, where we have our react-router routing for redux
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
console.log('Yeeeeeeeees!')

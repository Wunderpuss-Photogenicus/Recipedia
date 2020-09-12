import React from 'react';
import App from './App.jsx';
import { render } from 'react-dom';
import './styles/styles.css';

render(
  // App is wrapped in provider in its own file, where we have our react-router routing for redux
  <App />, document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
console.log('Yeeeeeeeees!')

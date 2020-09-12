import React, { Component } from 'react';
// import Wrapper from './containers/MainContainer.jsx';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }
  /* wrapping App here as opposed to in index.js to follow redux documenation for react router setup:
  https://redux.js.org/advanced/usage-with-react-router
  https://react-redux.js.org/api/provider
  */
  render() {
    return(
      <Provider store={store}>
        <div>
          <h1>Hello, redux world</h1>
        </div>
      </Provider>
    )
  }
}

export default App;
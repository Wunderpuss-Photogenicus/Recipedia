import React, { Component } from 'react';
// import Wrapper from './containers/MainContainer.jsx';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import LandingPageContainer from './components/LandingPage/LandingPageContainer.jsx'

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
         <LandingPageContainer />
        </div>
      </Provider>
    )
  }
}




export default App;
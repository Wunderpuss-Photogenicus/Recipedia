import React, { Component } from 'react';
// import Wrapper from './containers/MainContainer.jsx';
// import { render } from 'react-dom';
// import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import SearchContainer from './containers/SearchContainer.jsx'
import OutputContainer from './containers/OutputContainer.jsx'
//import AddRecipeContainer from './containers/AddRecipeContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }
  /* wrapping App here as opposed to in index.js to follow redux documenation for react router setup:
  https://redux.js.org/advanced/usage-with-react-router
  https://react-redux.js.org/api/provider
  */
  render() {
    //fixed navigation bar
    return(
    <div>
        <SearchContainer />
        <OutputContainer />
    </div>
    )
  }
}


//<Route path="/addrecipe" component={AddRecipeContainer} />

export default App;

 {/*<div>
        <div className="navbar">
          <Link className="link" to="/addrecipe">Add Recipe</Link>
          <form className="search">
            <input type="text"></input>
            <Link className="searchbutton" to="/addrecipe"><i className="material-icons">search</i></Link>
          </form>
          <Link className="link" to="/addrecipe">Login</Link>
        </div>
        <Switch>
          <Route exact path="/">
            {/* search container 
            <SearchContainer />
            {/* output container 
            <OutputContainer />
          </Route>
          <Route path="/addrecipe">
            <AddRecipeContainer />
          </Route>
          <Route path="/viewrecipe">
            <ViewRecipeContainer />
          </Route>
        </Switch>
    </div>*/}
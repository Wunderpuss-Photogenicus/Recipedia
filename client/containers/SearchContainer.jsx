
import React, { Component } from 'react';
import * as actions from '../actions/actions'
import { connect } from 'react-redux';
import SearchComponent from '../components/SearchComponent.jsx';
import OutputContainer from './OutputContainer.jsx'

const mapStateToProps = (state) => ({
  recipesList: state.recipes.recipesList, //pass down recipesList array
  name: state.recipes.name,
})

const mapDispatchToProps = (dispatch) => ({
  retrieveRecipe: (recipeObj) => dispatch(actions.retrieveRecipe(recipeObj)),
  newSearch:(recipe) => dispatch(actions.setSearch(recipe))
})

class SearchContainer extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    //this.props.itemsFetchData('/api');
  }

  render() {
    return (
      <div className="main">
        <SearchComponent
        dispatchRecipe={this.props.newSearch}
        handleClick={this.props.retrieveRecipe}
        name={this.props.name}
        />
        <OutputContainer />
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
import React, { Component } from 'react';
import * as actions from '../actions/actions'
import { connect } from 'react-redux';

import Recipe from '../components/Recipe.jsx';


const mapStateToProps = (state) => ({
  recipesList: state.recipes.recipesList, //pass down recipesList array
  // itemsHaveErrored: state.recipes.itemsHaveErrored,
  // itemsAreLoading: state.recipes.itemsAreLoading
})

class OutputContainer extends Component {

  constructor(props){
    super(props)
  }

  render() {
    // Logic for creating several recipe containers
    const recipeItems = this.props.recipesList.map(recipe => {
      return (
        < Recipe
        name={recipe.name}
        imageLink={recipe.imageLink}
        instructions={recipe.instructions}
        ingredients={recipe.ingredients}
        />
      ) 
    })
    return (
      <div className="recipeContainer">
        {/* the recipes will be rendered here */}
        {recipeItems}
      </div>
    )
  }
}


export default connect(mapStateToProps, null)(OutputContainer)
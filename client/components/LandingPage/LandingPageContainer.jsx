//main page rendered by '/'
//displays list of recipes

import React, { Component } from 'react';
import * as actions from '../../actions/actions'
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  recipesList: state.recipes.recipesList //pass down recipesList array 
})

const mapDispatchToProps = (dispatch) => ({
  retrieveAllRecipes: () => dispatch(actions.retrieveAllRecipes)
})

class LandingPageContainer extends Component {

  constructor(props){
    super(props)
  }

  render (){
    
    return (
      <div>
        {this.props.recipesList}
      </div>
    )
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer)
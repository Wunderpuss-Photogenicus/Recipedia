//main page rendered by '/'
//displays list of recipes

import React, { Component } from 'react';
import * as actions from '../../actions/actions'
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  recipesList: state.recipes.recipesList, //pass down recipesList array
  itemsHaveErrored: state.recipes.itemsHaveErrored,
  itemsAreLoading: state.recipes.itemsAreLoading
})

const mapDispatchToProps = (dispatch) => ({
  itemsFetchData: (url) => dispatch(actions.itemsFetchData(url))
})

class LandingPageContainer extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const arr = this.props.recipesList.map(el => {
      return <p>{el['title']}</p>
    })

    return (
      <div>
        <button onClick={() => this.props.itemsFetchData('/api')}>Get recipes</button>
        {arr}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer)
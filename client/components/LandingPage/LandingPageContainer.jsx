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
  //this is our handler function that dispatches an action that returns itemsIsLoading and also runs our fetch request
    //if the fetch request is successful, it will also dispatch itemsFetchDataSuccess, which will return our data to global state 
  itemsFetchData: (url) => dispatch(actions.itemsFetchData(url))
})

class LandingPageContainer extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.itemsFetchData('/api');
  }

  render() {
    const arr = this.props.recipesList.map(el => {
      return (
        <div className="landingPage">
          <div>{el.title}</div>
          <img src={el.img_link}></img>
        </div>
      ) 
    })

    return (
      <div className="page">
        {arr}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer)
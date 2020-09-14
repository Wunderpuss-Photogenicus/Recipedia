import React, { Component } from 'react';
import * as actions from '../../actions/actions'
import { connect } from 'react-redux';

class AddRecipeContainer extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <div>
        <h1>This is Add Recipe Container</h1>
      </div>
    )
  }
}

export default AddRecipeContainer;
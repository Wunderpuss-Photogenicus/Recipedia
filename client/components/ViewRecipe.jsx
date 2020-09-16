//page that shows an individual recipe and all of its info
import React, { Component } from 'react';
import * as actions from '../../actions/actions'
import { connect } from 'react-redux';

class ViewRecipe extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <div>
        <h1>This is View Recipe Container</h1>
      </div>
    )
  }
}

export default ViewRecipe;
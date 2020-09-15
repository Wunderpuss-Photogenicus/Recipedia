import React, { Component } from 'react';
import * as actions from '../../actions/actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  newRecipe: state.recipes.newRecipe,
  itemsHaveErrored: state.recipes.itemsHaveErrored,
  itemsAreLoading: state.recipes.itemsAreLoading
})

const mapDispatchToProps = (dispatch) => ({
  updateName: (data) => dispatch(actions.updateName(data)),
  updateInstructions: (data) => dispatch(actions.updateInstructions(data)),
  updateIngredients: (data) => dispatch(actions.updateIngredients(data)),
  updateImageLink: (data) => dispatch(actions.updateImageLink(data)),
  addRecipe: (data) => dispatch(actions.addRecipe(data))
})



class AddRecipeContainer extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <div>
        <form className='inputFields'>
          <p>Recipe Name.</p>
          <input 
            type="text"
            value={this.props.newRecipe.name}
            placeholder={'Input recipe name here...'}
            onChange={(e) => this.props.updateName(e.target.value)}/>

          <p>Instructions. Number each step (eg. “1. Cut tofu into cubes 2. Heat oil in pan”)</p>
          <input 
            type="text"
            value={this.props.newRecipe.instructions} 
            placeholder={'Input instructions here...'}
            onChange={(e) => this.props.updateInstructions(e.target.value)}/>

          <p>Ingredients. Separate each ingredient with a comma (eg. “14oz tofu, 6 cloves garlic”)</p>
          <input
           type="text" 
           value={this.props.newRecipe.ingredients} 
           placeholder={'Input ingredients here...'}
           onChange={(e) => this.props.updateIngredients(e.target.value)}/>

          <p>Image Link.</p>
          <input
           type="text" 
           value={this.props.newRecipe.imageLink} 
           placeholder={'Input image link here...'}
           onChange={(e) => this.props.updateImageLink(e.target.value)}/>
           
        </form>
        <br/>
        <button onClick={() => {this.props.addRecipe(this.props.newRecipe)}}>Submit the recipe</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeContainer)
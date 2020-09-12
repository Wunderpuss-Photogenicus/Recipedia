//import action types
import * as types from '../constants/actionTypes'
import { Switch } from 'react-router'

//set initial state
const initialState = {
  recipesList: [], //home_recipe: recipes from get request to database
  newRecipe: {
    name: '',
    imageLink: '',
    ingredients: [],
    instructions: '',
    creator: 'WUNDERPUSS',
  },
  retrievedRecipe: {},
}

//declare reducer and its methods
const recipeReducer = (state = initialState, action) => {
  
  switch (action.type){
    case types.HOME_RECIPES: 
      const retrieveRecipesFromDB = () => {
        fetch('/api')
          .then(res => res.json())
          .then(data => {
            return {
              ...state, 
              recipesList: data.rows
            };
          })
      }
    
    default: 
      return state; 
  }
}

export default recipeReducer
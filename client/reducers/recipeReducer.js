//import action types
import * as types from '../constants/actionTypes'

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
  itemsHaveErrored: false,
  itemsAreLoading: false
}

//declare reducer and its methods
const recipeReducer = (state = initialState, action) => {
  let itemsHaveErrored;
  let itemsAreLoading;
  let recipesList;

  switch (action.type){
    case types.ITEMS_HAS_ERRORED: 
      itemsHaveErrored = action.payload;
      return {
        ...state,
        itemsHaveErrored
      }
    
    case types.ITEMS_IS_LOADING:
      itemsAreLoading = action.payload;
      return {
        ...state,
        itemsAreLoading
      }

    case types.ITEMS_FETCH_DATA_SUCCESS:
      recipesList = action.payload;
      return {
        ...state,
        recipesList
      }

    default: 
      return state; 
  }
}

export default recipeReducer
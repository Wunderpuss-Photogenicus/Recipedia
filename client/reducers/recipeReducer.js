//import action types
import * as types from '../constants/actionTypes'

//set initial state
const initialState = {
  recipesList: [], //home_recipe: recipes from get request to database
  newRecipe: {
    name: '',
    imageLink: '',
    ingredients: '',
    instructions: '',
    creator: 1,
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

    case types.UPDATE_NAME:
      return {
        ...state,
        newRecipe : {
          ...state.newRecipe,
          name: action.payload
        }
      }
    
    case types.UPDATE_INSTRUCTIONS:
      return {
        ...state,
        newRecipe : {
          ...state.newRecipe,
          instructions: action.payload
        }
      }

    case types.UPDATE_INGREDIENTS:
      return {
        ...state,
        newRecipe : {
          ...state.newRecipe,
          ingredients: action.payload
        }
      }

    case types.UPDATE_IMAGELINK:
      return {
        ...state,
        newRecipe : {
          ...state.newRecipe,
          imageLink: action.payload
        }
      }

    default: 
      return state; 
  }
}

export default recipeReducer
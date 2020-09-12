// import actionType constants
import * as types from '../constants/actionTypes'


//export functions that return action objects
  //objects have two props
  //type: a reference to the consts, tells which reducer method to use
  //payload: whatever data the reducer will need
  
export const retrieveAllRecipes = () => ({
  type: types.HOME_RECIPES,
  payload: null
})

export const retrieveRecipe = (recipeId) => ({
  type: types.RETRIEVE_RECIPE,
  payload: recipeId
})

export const createRecipe = () => ({
  type: types.CREATE_RECIPE,
  payload: null
})

export const inputRecipeData = (data) => ({
  type: types.INPUT_RECIPE_DATA,
  payload: data
})

  //ex:
  // export const addCard = (marketId) => ({
  //   type: types.ADD_CARD,
  //   payload: marketId,
  // });
  
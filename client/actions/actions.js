// import actionType constants
import * as types from '../constants/actionTypes'


//export functions that return action objects
  //objects have two props
  //type: a reference to the consts, tells which reducer method to use
  //payload: whatever data the reducer will need
  
export const retrieveAllRecipes = () => ({
  type: types.HOME_RECIPES,
})

export const retrieveRecipe = (recipeId) => ({
  type: types.RETRIEVE_RECIPE,
  payload: recipeId
})

export const createRecipe = () => ({
  type: types.CREATE_RECIPE,
  payload: null
})

export const itemsHasErrored = (bool) => ({
  type: types.ITEMS_HAS_ERRORED,
  payload: bool
})

export const itemsIsLoading = (bool) => ({
  type: types.ITEMS_IS_LOADING,
  payload: bool
})

export const itemsFetchDataSuccess = (data) => ({
  type: types.ITEMS_FETCH_DATA_SUCCESS,
  payload: data
})

export const itemsFetchData = (url) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
    .then((response) => {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      dispatch(itemsIsLoading(false));
      return response;
      })
      .then((response) => response.json())
      .then((items) => {
        console.log(items)
        dispatch(itemsFetchDataSuccess(items))
      })
      .catch(() => dispatch(itemsHasErrored(true)));
    }
}
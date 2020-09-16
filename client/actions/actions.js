// import actionType constants
import * as types from './actionTypes'


//export functions that return action objects
  //objects have two props
  //type: a reference to the consts, tells which reducer method to use
  //payload: whatever data the reducer will need
  


export const retrieveRecipe = (recipeId) => ({
  type: types.RETRIEVE_RECIPE,
  payload: recipeId
})

export const createRecipe = () => ({
  type: types.CREATE_RECIPE,
  payload: null
})

















export const retrieveAllRecipes = () => ({
  type: types.HOME_RECIPES,
})
//this action will get dispatched if our fetch request errors doesn't return data
export const itemsHasErrored = (bool) => ({
  type: types.ITEMS_HAS_ERRORED,
  payload: bool
})

//this action will be dispatched twice per fetch request:
  // first: at the same time our fetch request is invoked
  // second: once our request returns either an error or valid data
export const itemsIsLoading = (bool) => ({
  type: types.ITEMS_IS_LOADING,
  payload: bool
})

//this action will be dispatched from our async fetch request, and will return our fetched data to state
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
export const postSuccess = () => ({
  type: types.POST_SUCCESS,
})

export const addRecipe = (data) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch('/api', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      dispatch(itemsIsLoading(false));
      return response;
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // dispatch(postSuccess())
      })
      .catch(() => dispatch(itemsHasErrored(true)));
    }
}

export const updateName = (data) => ({
  type: types.UPDATE_NAME,
  payload: data
})

export const updateInstructions = (data) => ({
  type: types.UPDATE_INSTRUCTIONS,
  payload: data
})

export const updateIngredients = (data) => ({
  type: types.UPDATE_INGREDIENTS,
  payload: data
})

export const updateImageLink = (data) => ({
  type: types.UPDATE_IMAGELINK,
  payload: data
})

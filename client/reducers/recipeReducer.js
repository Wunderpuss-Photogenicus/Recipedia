//import action types
import * as types from '../actions/actionTypes'

//set initial state
const initialState = {
    name: '',
    imageLink: '',
    ingredients: '',
    instructions: '',
    recipesList: [],
    // creator: 1,
  }
  // retrievedRecipe: {},
  // itemsHaveErrored: false,
  // itemsAreLoading: false

//declare reducer and its methods
const recipeReducer = (state = initialState, action) => {
  // let itemsHaveErrored;
  // let itemsAreLoading;
  let recipesList;

  switch (action.type){

    //map over recipes list,updating state from action.payload
    //return updated state
    case types.RETRIEVE_RECIPE: 
      itemsHaveErrored = action.payload;
      return {
        ...state,
        itemsHaveErrored
      }
    //STRETCH: Use when modal has been created
    case types.CREATE_RECIPE:
      itemsAreLoading = action.payload;
      return {
        ...state,
        itemsAreLoading
      }
      default: 
      return state; 
  }
}

//     case types.ITEMS_FETCH_DATA_SUCCESS:
//       recipesList = action.payload;
//       return {
//         ...state,
//         recipesList
//       }

//     case types.UPDATE_NAME:
//       return {
//         ...state,
//         newRecipe : {
//           ...state.newRecipe,
//           name: action.payload
//         }
//       }
    
//     case types.UPDATE_INSTRUCTIONS:
//       return {
//         ...state,
//         newRecipe : {
//           ...state.newRecipe,
//           instructions: action.payload
//         }
//       }

//     case types.UPDATE_INGREDIENTS:
//       return {
//         ...state,
//         newRecipe : {
//           ...state.newRecipe,
//           ingredients: action.payload
//         }
//       }

//     case types.UPDATE_IMAGELINK:
//       return {
//         ...state,
//         newRecipe : {
//           ...state.newRecipe,
//           imageLink: action.payload
//         }
//       }

//     default: 
//       return state; 
//   }
// }

export default recipeReducer
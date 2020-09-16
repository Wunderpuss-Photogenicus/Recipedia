import { combineReducers } from 'redux';
import recipesReducer from './recipeReducer'
// combine reducers
const reducers = combineReducers({
  recipes: recipesReducer,
});

// make the combined reducers available for import
export default reducers;
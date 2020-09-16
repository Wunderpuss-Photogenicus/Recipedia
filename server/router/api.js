const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipeController');

router.get('/getData', recipeController.getData, (req, res) => {
  res.status(200).json(res.locals.recipes);
});

// retrieve recipes based on search bar input (by ingredients)
router.get('/searchIngredient', recipeController.searchRecipes, (req, res) => {
  res.status(200).json(res.locals.searchRecipes);
});

router.post('/', 
  recipeController.addToRecipes, 
  recipeController.addToIngredients, 
  // recipeController.addToJoin, //need to create this controller 
  (req, res) => {
    res.status(200).json({});
});

module.exports = router;
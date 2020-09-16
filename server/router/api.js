const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipeController');

router.get('/getData', recipeController.getData, (req, res) => {
  res.status(200).json(res.locals.recipes);
});

// retrieve recipes based on search bar input (by ingredients)
router.post('/searchRecipes', recipeController.searchRecipes, (req, res) => {
  res.status(200).json(res.locals.searchRecipes);
});

router.post('/addRecipe', recipeController.addRecipe, (req, res) => {
  res.status(200);
});

module.exports = router;
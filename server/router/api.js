const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipeController');

router.get('/', recipeController.getData, (req, res) => {
  res.status(200).json(res.locals.recipes);
});

router.post('/', 
  recipeController.addToRecipes, 
  recipeController.addToIngredients, 
  // recipeController.addToJoin, //need to create this controller 
  (req, res) => {
    res.status(200).json({});
});

module.exports = router;
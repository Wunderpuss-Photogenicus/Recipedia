const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipeController');

router.get('/', recipeController.getData, (req, res) => {
  console.log('this is getting hit');
  res.status(200).json(res.locals.recipes);
});

module.exports = router;
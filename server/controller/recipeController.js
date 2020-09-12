const db = require('../model/recipeModel');

const recipeController = {};

recipeController.getData = (req, res, next) => {
  const test = 'SELECT * FROM recipes'
  db.query(test)
    .then(data => {
      res.locals.recipes = data.rows;
      console.log('greetings from the controller file');
      return next();
    })
    .catch(err => {
      return next(err);
    });
}

module.exports = recipeController;
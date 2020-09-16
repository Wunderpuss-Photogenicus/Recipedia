const e = require('express');
const db = require('../model/recipeModel');

const recipeController = {};


//retrieving data from database
recipeController.getData = (req, res, next) => {
  const getRecipes = 'SELECT * FROM recipes';
  
  db.query(getRecipes)
  .then(data => {
    res.locals.recipes = data.rows;
    return next();
  })
  .catch((err) =>
    next(
      `{ log: 'Express error handler caught error in fileController.getEverything',
        status: 400,
        message: { err: ${err} }`
    )
  )
}

recipeController.searchRecipes = (req, res, next) => {
  const { name, ingredients, instructions, img_link, created_by } = req.params;
  const searchQuery = `SELECT * FROM recipes WHERE`
  const values = [name, ingredients, instructions, img_link, created_by];  
}

recipeController.addToRecipes = (req, res, next) => {
  const { name, imageLink, ingredients, instructions, creator } = req.body;
  const query = {
    text: 'INSERT INTO recipes (title, instructions, img_link, created_by) VALUES ($1, $2, $3, $4) RETURNING id;',
    values: [name, instructions, imageLink, creator]
  }
  db.query(query)
    .then(data => {
      res.locals.id = data.rows[0]['id'];
      res.locals.ingredients = ingredients;
      return next();
    })
    .catch(err => {
      return next(err);
    });
}

recipeController.addToIngredients = (req, res, next) => {
  const { ingredients } = req.body;
  const arr = ingredients.split(',');

  for (let i = 0; i < arr.length; i++) {
    // This query checks if the ingredient is in the table. If not, it add the ingredient to the table. Note here to use SELECT syntax instead of VALUES  
    const queryStr = `INSERT INTO ingredients (name) SELECT ('${arr[i]}') WHERE not exists (SELECT * FROM ingredients WHERE name='${arr[i]}') RETURNING id;`;
    
    db.query(queryStr)
    .then(data => {
      console.log(data.rows[0]);
      return next();
    })
    .catch(err => {
      return next(err);
    });
  }
}



/*
Query templates:

***Joining recipe with ingredients***
SELECT r.title, i.name as ingredient, j.quantity 
FROM recipes r
JOIN ing_join_recipe j
ON r.id = j.recipe_id
LEFT JOIN ingredients i
ON j.ingredient_id = i.id;

***Inserting new recipe***
INSERT INTO recipes (title, instructions, img_link, created_by)
VALUES (
'Tofu Stir Fry',
'STEP 1 Combine rice with tofu and stir fry',
'https://www.eatingbirdfood.com/wp-content/uploads/2019/11/Tofu-Stir-Fry-3.jpg',
1 (always set this to one until auth is set up and users table is created)
);

***Inserting new ingredients***
INSERT INTO ingredients (name)
VALUES ('tofu');

***Inserting to join table***
INSERT INTO ing_join_recipe (recipe_id, ingredient_id, quantity)
VALUES (
3,
1,
'1 cup'
);


*/

module.exports = recipeController;
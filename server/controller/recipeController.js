const db = require('../model/recipeModel');

const recipeController = {};

// retrieving data from database
recipeController.getData = (req, res, next) => {
  // query to retrieve entire recipes table
  const getRecipes = `SELECT * FROM recipes`;
  
  db.query(getRecipes)
  .then(data => {
    // storing recipes as prop on res.locals object, data.rows = {name: 'x', created_by: 'x', instructions: 'x', img_link: 'x', ingredients: 'x'}
    res.locals.recipes = data.rows;
    return next();
  })
  // error handler on this middleware
  .catch((err) =>
    next(
      `{ log: 'Express error handler caught error in recipeController.getData',
        status: 400,
        message: { err: ${err} }`
    )
  )
};

// retrieve all recipes by name from user input
recipeController.searchRecipes = (req, res, next) => {
  // destructure 'name' from req.body obj
  const { name } = req.body;
  // store name var in array, assigned to 'values'
  const values = [name];
  // query to retrieve all recipes from table where name matches part of user input
  const searchQuery = `SELECT * FROM recipes WHERE name = $1`;

  db.query(searchQuery, values)
  .then(data => {
    // storing searchRecipes as prop on res.locals object,
    res.locals.searchRecipes = data.rows;
    return next();
  })
   // error handler on this middleware
  .catch((err) =>
    next(
      `{ log: 'Express error handler caught error in recipeController.searchRecipes',
        status: 400,
        message: { err: ${err} }`
    )
  )
};

// middleware to addRecipe to db
recipeController.addRecipe = (req, res, next) => {
  // destructure all db columns from req.body obj
  const { name, instructions, ingredients, img_link, created_by } = req.body;
  // store destructured variables in values array
  const values = [name, instructions, ingredients, img_link, created_by];
  // query to add user input recipe into recipes table
  const addRecipe = `INSERT INTO recipes (name, instructions, img_link, ingredients, created_by) VALUES ($1, $2, $3, $4, $5)`;
  db.query(addRecipe, values)
  .then(() => console.log('Successfully added new recipe!'))
  .then(() => next())
  // error handler on this middleware
  .catch((err) => 
    next(
      `{ log: 'Express error handler caught error in recipeController.addRecipe',
        status: 400,
        message: { err: ${err} }`
    )
  );
};


// recipeController.addToIngredients = (req, res, next) => {
//   const { ingredients } = req.body;
//   const arr = ingredients.split(',');

//   for (let i = 0; i < arr.length; i++) {
//     // This query checks if the ingredient is in the table. If not, it add the ingredient to the table. Note here to use SELECT syntax instead of VALUES  
//     const queryStr = `INSERT INTO ingredients (name) SELECT ('${arr[i]}') WHERE not exists (SELECT * FROM ingredients WHERE name='${arr[i]}') RETURNING id;`;
    
//     db.query(queryStr)
//     .then(data => {
//       console.log(data.rows[0]);
//       return next();
//     })
//     .catch(err => {
//       return next(err);
//     });
//   }
// }



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
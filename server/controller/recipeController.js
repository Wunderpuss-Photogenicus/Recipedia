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
const e = require('express');
const db = require('../model/recipeModel');

const recipeController = {};

recipeController.getData = (req, res, next) => {
  const test = 'SELECT r.title, r.img_link, i.name as ingredient FROM recipes r LEFT JOIN ing_join_recipe j ON r.id = j.recipe_id LEFT JOIN ingredients i ON j.ingredient_id = i.id;'
  db.query(test)
  //brute force solution we're so sorry
    .then(data => {
      // create result array of objects
      console.log(data.rows);
      // iterate through data array
      const resultArray = [];
      const nameArray =[];
      for (let i = 0; i < data.rows.length; i++) {
        if (!nameArray.includes(data.rows[i].title)) {
          nameArray.push(data.rows[i].title);
          resultArray.push({
            title: data.rows[i].title,
            img_link: data.rows[i].img_link,
            ingredients: [data.rows[i].ingredient]
          });
        } else {
          resultArray.forEach(el => {
            if (el.title === data.rows[i].title) {
              el.ingredients.push(", " + data.rows[i].ingredient);
            }
          })
        }
      }
      res.locals.recipes = resultArray;
      console.log(res.locals.recipes);
      return next();
      })
    .catch(err => {
      return next(err);
    });
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
    // This query checks if the ingredient is in the table. If not, it add the ingredient to the table.
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

// recipeController.addToJoin = (req, res, next) => {
//   const { ingredients } = req.body;
//   const arr = ingredients.split(',');
  
//   for (let i = 0; i < arr.length; i++) {
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
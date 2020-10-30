//module dependencies
const express = require('express');
const router = express.Router();
const recipe = require('./recipe.js');

router.get('/getRecipe', recipe.getRecipe);

router.get('/getIngredientsInRecipe', recipe.getIngredientsInRecipe);

router.get('/getRecommendedRecipe', recipe.getRecommendedRecipe);

//router.post('/postRecipe', recipe.postRecipe);

router.get('/searchRecipe', recipe.searchRecipe);

module.exports = router;
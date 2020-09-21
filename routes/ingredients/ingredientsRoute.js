//module dependencies
const express = require('express');
const router = express.Router();
const ingredients = require('./ingredients.js');

router.get('/getIngredients', ingredients.getIngredients);

router.get('/searchIngredients', ingredients.searchIngredients);

router.post('/insertRefrigerator', ingredients.insertRefrigerator);

module.exports = router;
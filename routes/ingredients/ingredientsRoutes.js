//module dependencies
const express = require('express');
const router = express.Router();
const ingredients = require('./ingredients.js');

router.get('/getIngredients', ingredients.getIngredients);
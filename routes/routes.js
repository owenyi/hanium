//module dependencies
const express = require('express');
const router = express.Router();

//ingredients
const ingredientsRoute = require('./ingredients/ingredientsRoute.js');
router.use('/ingredients', ingredientsRoute);

//user
const userRoute = require('./user/userRoute.js');
router.use('/user', userRoute);
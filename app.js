//module dependencies
const express = require('express');
const app = express();
const createError = require('http-errors');

app.use(express.json());

//apiRouter
const apiRouter = require('./routes/route.js');
app.use('/api', apiRouter);

//exports
module.exports = app;
const express = require('express');
const indexRouter = express.Router();
const Data = require('../models/data');

// Define routes
indexRouter.get('/', async (req, res) => {
  const data = await Data.find();
  res.render('index', { contacts: data }); // rendering index.ejs from views folder
});

module.exports = indexRouter;

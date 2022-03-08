const express = require('express');
const contactRouter = express.Router();
const Data = require('../models/data');
const fs = require('fs');

// Define routes
contactRouter
  .post('/add/contact', (req, res) => {
    const { firstName, lastName, phone, email } = req.body;
    const newData = new Data({ firstName, lastName, phone, email });

    // Save contact
    newData
      .save()
      .then(() => {
        console.log('Contact saved successfully!!!');
        res.redirect('/');
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  })
  .get('/delete/contact/:_id', (req, res) => {
    const { id } = req.params;
    Data.deleteOne({ id })
      .then(() => {
        console.log('Contact deleted successfully!!!');
        res.redirect('/');
      })
      .catch((error) => {
        console.log('Error : ', error);
      });
  });

module.exports = contactRouter;

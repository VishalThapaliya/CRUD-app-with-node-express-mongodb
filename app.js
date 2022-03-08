const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const app = express();

// MongoDB connection
const dbConnection = mongoose.connect('mongodb://localhost/CRUD_express', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// routes
app.use(require('./routes/indexRouter'));
app.use(require('./routes/contactRouter'));

app.listen(port, () => {
  console.log(`Server is runnig on port : ${port}`);
});

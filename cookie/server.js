//setting my requirements
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const sequelize = require('sequelize');
const sequelizeConnection = require('./db')
const Fortune = require('./models/fortune-model');

// using bodyparser middleware that lets me access AJAX data using req.body
app.use(bodyparser.urlencoded({ extended: true }));

// look into if I need to app.use(bodyparser.json())
// or  app.use(express.static('public')) when adding in frontend


//setting up Router.route method

app.use("/api",require('./api-routes'))

// revisit this when creating front-end views later
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

//serve up views
app.get('/view/index', (req, res) => {res.sendFile(path.join(__dirname, '/views/index.html'))});

//setting server to listen to port 8000

app.listen('8000', function(){
	console.log('Predicting your fortunes now on port 8000.')
})



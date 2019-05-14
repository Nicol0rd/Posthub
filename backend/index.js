'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')

require('./models/user')
require('./models/post')
require('./models/comment')

const app = express();
const port = process.env.PORT || 8080;
// const database = 'mongodb://localhost/Movies'
const database = 'mongodb://localhost/posthub'

// BODY PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())


// CHECK IF SERVER IS WORKING
mongoose.Promise = global.Promise;
mongoose.connect(database, { useNewUrlParser: true }, (err) => {
	if (err) {
		console.log('Error connecting to MongoDB.');
  }
    console.log('Database is connected.')
});

app.listen(port, (err) => {
  if (err) {
    console.log('Server not working.');
    console.log(err);
  } else { 
    console.log('Server is running on PORT: ' + port);
  }
});

app.get('/', (req, res) => {
  res.send('API is working.');
});


// FOR CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  res.setHeader('Cache-Control', 'no-cache');
  next();
});

const userRouter = require('./routes/user-router');
app.use('/user', userRouter);

const postRouter = require('./routes/post-router');
app.use('/post', postRouter);

const commentRouter = require('./routes/comment-router');
app.use('/comment', commentRouter);
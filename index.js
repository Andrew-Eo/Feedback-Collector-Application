// Express App to register this route handler with
// index.js will be used for all the initial applications setup
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require ('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');

// require the passport file and then assign anything out of that file to the passport config variable
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
        // Cookie to be expired after exactly 30 days
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


// Second parathesis involes calling the first function
require('./routes/authRoutes') (app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// get is to watch for incoming HTTP requests with this method; other methods include post, put, delete, etc.
// '/' to watch for requests trrying to access '/'
// req to representing the incoming requests
// res is to representing the outgoing response
// res.send to immediately send some JSON back to who ever made this request

// app.get('/', (req, res) => {
  // res.send({hi:'darling' });
// });

// If there is an environment variable that has already defined by Hiroku, go ahead and assign that variable to port. Otherwise, use 5000 as default
const PORT = process.env.PORT || 5000;
app.listen(PORT);

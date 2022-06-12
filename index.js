// Express App to register this route handler with
const express = require('express');
const app = express();

// get is to watch for incoming HTTP requests with this method; other methods include post, put, delete, etc.
// '/' to watch for requests trrying to access '/'
// req to representing the incoming requests
// res is to representing the outgoing response
// res.send to immediately send some JSON back to who ever made this request
app.get('/', (req, res) => {
  res.send({ hi:'there' });
});

// If there is an environment variable that has already defined by Hiroku, go ahead and assign that variable to port. Otherwise, use 5000 as default
const PORT = process.env.PORT || 5000;
app.listen(5000);

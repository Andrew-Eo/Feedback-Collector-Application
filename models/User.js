const mongoose = require('mongoose');

// The schema will describe what every individual property is going to look like
const Schema = mongoose.Schema;

// You can also add in other properties to extract
const userSchema = new Schema({
  googleId: String
});

// This model class to create a new model instance and then save it to the database
// Access to model class which represents the entire underlying collection of records that exist inside of database
// Make use of model class to search over all the records that exist inside the collection
mongoose.model('users', userSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  // To specify that this will be an array of recipient schema records
  yes: { type: Number, default: 0},
  no: { type: Number, default: 0},
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  // underscore representing is a reference field
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);

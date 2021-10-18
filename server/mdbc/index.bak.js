// db/index.js
const mongoose = require('./dbc')
const Schema = mongoose.Schema;

const ceshiSchema = new Schema({
  title: String,
  body: String,
  date: Date
});

const MyModel = mongoose.model('movies', ceshiSchema);

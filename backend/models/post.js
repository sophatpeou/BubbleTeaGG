const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema );

// this is the schema which shows what type of variables that should be in the data sent or taken.

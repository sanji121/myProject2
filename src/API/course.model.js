const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Course
let Course = new Schema({
  topic: {
    type: String
  },
  price: {
    type: String
  },
  location: {
    type: String
  },
  provider: {
    type: String
  },
  rank: {
    type: String
  },
  time: {
    type: String
  }
},{
    collection: 'Courses'
});

module.exports = mongoose.model('Course', Course);
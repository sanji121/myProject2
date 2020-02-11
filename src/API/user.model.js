const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for User
let User = new Schema({
  username: {
    type: String
  },
  userEmail: {
    type: String
  },
  userPassword: {
    type: String
  },
  userType: {
    type: String
  }
},{
    collection: 'Users'
});

module.exports = mongoose.model('User', User);
const mongoose = require('mongoose');

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: false },
  bio: { type: String, required: false },
});

const User = mongoose.model(`User`, userSchema);

module.exports = User;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String, required: true, unique: true},
  height: { type: String, required: true },
  weight: { type: String, required: true },
  age: { type: String, required: true },
  bodyfat: { type: String, required: true },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
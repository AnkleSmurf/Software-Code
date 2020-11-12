const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  typeOfActivity: { type: String, required: true},
  activityRawData: {type: Array, required: true}
}, {
  timestamps: true,
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
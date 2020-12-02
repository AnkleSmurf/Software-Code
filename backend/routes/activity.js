const router = require('express').Router();
let Activity = require('../models/activity.model');

router.route('/').get((req, res) => {
  Activity.find()
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const typeOfActivity = req.body.typeOfActivity;
  const activityRawData = req.body.activityRawData;

  const newActivity = new Activity({
    typeOfActivity,
    activityRawData
  });

  newActivity.save()
  .then(() => res.json('Activity entry added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:createdAt').get((req, res) => {
  Exercise.findById(req.params.createdAt)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

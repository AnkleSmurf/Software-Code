const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const height = req.body.height;
  const weight = req.body.weight;
  const age = req.body.age;
  const bodyfat = req.body.bodyfat;
  const username = req.body.username;
  const password = req.body.password

  const newUser = new User({id, height, weight, age, bodyfat, username, password});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/username/:username').get((req, res) => {
  User.find({username: req.params.username})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  User.find({id: req.params.id})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.id = Number(req.body.id);
      user.height = Number(req.body.height);
      user.weight = Number(req.body.weight);
      user.age = Number(req.body.age);
      user.bodyfat = Number(req.body.bodyfat)
      user.username = String(req.body.username)
      user.password = String(req.body.password)

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
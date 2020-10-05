const router = require('express').Router()
const  { Workout } = require('../models')

// get
router.get('./workouts', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

// post
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(exercise => res.json(exercise))
    .catch(err => console.log(err))
})

//put 
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { workouts: req.body }})
    .then((exercise) => res.json(exercise))
    .catch(err => console.log(err))
})

// delete
router.delete('/workouts/:id', (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
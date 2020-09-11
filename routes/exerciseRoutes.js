const router = require('express').Router()
const  { Exercise, Stats } = require('../models')
const exercise = require('../models/exercise')

// get
router.get('./exercises', (req, res) => {
  Exercise.find()
    .populate('stats')
    .then(exercises => res.json(exercises))
    .catch(err => console.log(err))
})

// post
router.post('/exercises', (req, res) => {
  Exercise.create(req.body)
    .then(exercise => res.json(exercise))
    .catch(err => console.log(err))
})

//put 
router.put('/exercises/:id', (req, res) => {
  Exercise.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// delete
router.delete('/exercises/:id', (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

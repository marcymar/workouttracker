const router = require('express').Router()
const { Exercise, Stats } = require('../models')

// get
router.get('./stats', (req, res) => {
  Stat.find()
    .populate('stats')
    .then(stats => res.json(stats))
    .catch(err => console.log(err))
})

// post
router.post('/stats', (req, res) => {
  Stat.create(req.body)
    .then(stat => res.json(stat))
    .catch(err => console.log(err))
})

//put 
router.put('/stats/:id', (req, res) => {
  Stat.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// delete
router.delete('/stats/:id', (req, res) => {
  Stat.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})
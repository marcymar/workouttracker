const { model, Schema } = require('mongoose')

const Exercise = new Schema({
  text: {
    type: String,
    unique: true,
    required: true
  },
  isDone: {
    type: Boolean,
    required: true
  },

}, { timestamps: true })

Exercise.plugin(require('passport-local-mongoose'))

module.exports = model('Exercise', Exercise)
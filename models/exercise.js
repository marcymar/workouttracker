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


module.exports = model('Exercise', Exercise)
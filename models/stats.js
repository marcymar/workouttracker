const { model, Schema } = require('mongoose')

const Stats = new Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    unique: true,
    required: true
  },
  weight: {
    type: String,
    unique: true,
    required: true
  },
}, { timestamps: true })


module.exports = model('Stats', Stats)
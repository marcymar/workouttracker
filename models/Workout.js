const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: {
    type: Date,
    default: Date.now

  },
  exercises: [{

    name: {
      type: String,
      unique: false,
      required: true
    },
    type: {
      type: String,
      unique: false,
      required: true
    },
    weight: {
      type: Number,
      unique: false,
      required: false
    },
    sets: {
      type: Number,
      unique: false,
      required: false
    },
    reps: {
      type: Number,
      unique: false,
      required: false
    },
    duration: {
      type: Number,
      unique: false,
      required: true
    },
    distance: {
      type: Number,
      unique: false,
      required: false
    }
  }]
}, { timestamps: true })


module.exports = model('Workout', Workout)
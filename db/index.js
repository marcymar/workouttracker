module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/fitness_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const mongoose = require('mongoose')

const passwordSchema = new mongoose.Schema({
  name: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Password', passwordSchema);

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trailSchema = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  id: Number,
  link: String,
  location: String,
  image: String,
  length: Number,
  conditionStatus: String,
  stars: Number,
  latitude: Number,
  longitude: Number
})

const Trail = mongoose.model('trail', trailSchema)

module.exports = Trail

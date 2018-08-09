const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
mongoose.promise = Promise

const UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  firstname: String,
  lastname: String,
  email: String,
  profilePic: String,
  bio: String,
  age: String,
  location: String,
  milesHiked: Number,
  savedTrails: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trail'}],
  completedTrails: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trail'}],
  roles: []
})

// hash password before saving to db
UserSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('=======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password)
    next()
  }
})

// method for checking and hashing passwords
UserSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

module.exports = User = mongoose.model('user', UserSchema)

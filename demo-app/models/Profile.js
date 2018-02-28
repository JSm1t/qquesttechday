const mongoose = require('mongoose');

/**
 * Schema for a profile in the MongoDB database
 */
const profileSchema = new mongoose.Schema({
  name: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  titel: { type:String },
  profileImage: String,
  column: [{ type: String, body: String, date: Date }]
});

/**
 * Middleware for updating the updatedAt date
 */
profileSchema.pre('save', (next) => {
  const profile = this;
  if(!profile.isModified()) { return next(); }
  profile.updatedAt(Date.now());
  next();
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
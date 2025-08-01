// server/models/Profile.js
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bio: { type: String, maxLength: 250 },
    avatar: { type: String, default: '' },
    location: { type: String },
    website: { type: String },
    social: {
      twitter: String,
      facebook: String,
      linkedin: String,
      instagram: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Profile', ProfileSchema);

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
/// testt repo not good 
module.exports = mongoose.model('Profile', ProfileSchema);
// server/config/db.js
const mongoose = require('mongoose');   
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ MongoDB Error:', err.message);
    process.exit(1);
  }
};

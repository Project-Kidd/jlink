// server/routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const auth = require('../middleware/authMiddleware');

// Get my profile
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['email']);
    if (!profile) return res.status(404).json({ msg: 'No profile found' });
    res.json(profile);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Create or update profile
router.post('/', auth, async (req, res) => {
  const { bio, avatar, location, website, social } = req.body;
  const profileFields = { user: req.user.id, bio, avatar, location, website, social };

  try {
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });
      return res.json(profile);
    }

    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;

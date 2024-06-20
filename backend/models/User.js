const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    bio: { type: String },
    karma: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now }
  },
  subscribed_subreddits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subreddit' }],
  saved_posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  activity_log: [{
    action: { type: String },
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    subreddit_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subreddit' },
    timestamp: { type: Date, default: Date.now }
  }]
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', UserSchema);

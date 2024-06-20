const mongoose = require('mongoose');

const SubredditSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  created_at: { type: Date, default: Date.now },
  moderators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  rules: [{ type: String }],
  subscribers_count: { type: Number, default: 0 }
});

module.exports = mongoose.model('Subreddit', SubredditSchema);


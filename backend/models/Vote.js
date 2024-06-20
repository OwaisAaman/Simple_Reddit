const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  comment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
  vote_type: { type: String, enum: ['upvote', 'downvote'], required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vote', VoteSchema);

const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  body: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  votes: { upvotes: { type: Number, default: 0 }, downvotes: { type: Number, default: 0 } }
});

module.exports = mongoose.model('Comment', CommentSchema);

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subreddit_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subreddit', required: true },
  created_at: { type: Date, default: Date.now },
  votes: { upvotes: { type: Number, default: 0 }, downvotes: { type: Number, default: 0 } },
  comments: [{
    comment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    body: { type: String },
    created_at: { type: Date, default: Date.now },
    votes: { upvotes: { type: Number, default: 0 }, downvotes: { type: Number, default: 0 } }
  }]
});

module.exports = mongoose.model('Post', PostSchema);



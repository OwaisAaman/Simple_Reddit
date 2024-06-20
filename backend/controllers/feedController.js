const User = require('../models/User');
const Post = require('../models/Post');

exports.getFeed = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).populate('subscribed_subreddits');
    const posts = await Post.find({ subreddit_id: { $in: user.subscribed_subreddits } }).sort({ created_at: -1 });
    res.send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
};

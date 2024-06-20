const Vote = require('../models/Vote');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.vote = async (req, res) => {
  const { post_id, comment_id, vote_type } = req.body;
  try {
    const vote = new Vote({ user_id: req.user.userId, post_id, comment_id, vote_type });
    await vote.save();
    
    if (post_id) {
      const post = await Post.findById(post_id);
      vote_type === 'upvote' ? post.votes.upvotes++ : post.votes.downvotes++;
      await post.save();
    }

    if (comment_id) {
      const comment = await Comment.findById(comment_id);
      vote_type === 'upvote' ? comment.votes.upvotes++ : comment.votes.downvotes++;
      await comment.save();
    }

    res.status(201).send(vote);
  } catch (error) {
    res.status(400).send(error);
  }
};

const Comment = require('../models/Comment');
const Post = require('../models/Post');

exports.createComment = async (req, res) => {
  const { post_id, body } = req.body;
  try {
    const comment = new Comment({ post_id, author_id: req.user.userId, body });
    await comment.save();
    const post = await Post.findById(post_id);
    post.comments.push(comment);
    await post.save();
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post_id: req.params.postId }).sort({ created_at: -1 });
    res.send(comments);
  } catch (error) {
    res.status(400).send(error);
  }
};

const Post = require('../models/Post');

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author_id', 'username').populate('subreddit_id', 'name');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createPost = async (req, res) => {
  const { title, body, author_id, subreddit_id } = req.body;

  try {
    const newPost = new Post({
      title,
      body,
      author_id,
      subreddit_id,
      created_at: new Date(),
    });

    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getPosts,
  createPost,
};


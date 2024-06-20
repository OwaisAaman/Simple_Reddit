const Subreddit = require('../models/Subreddit');
const User = require('../models/User');

exports.createSubreddit = async (req, res) => {
  const { name, description } = req.body;
  try {
    const subreddit = new Subreddit({ name, description, created_by: req.user.userId });
    await subreddit.save();
    res.status(201).send(subreddit);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getSubreddits = async (req, res) => {
  try {
    const subreddits = await Subreddit.find({});
    res.send(subreddits);
  } catch (error) {
    res.status(400).send(error);
  }
};

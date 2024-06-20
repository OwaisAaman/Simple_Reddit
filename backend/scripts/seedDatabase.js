const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const User = require('../models/User');
const Post = require('../models/Post');
const Subreddit = require('../models/Subreddit');

const connectDB = require('../config/db');
require('dotenv').config();

connectDB();

const seedDatabase = async () => {
  try {
    await User.deleteMany({});
    await Post.deleteMany({});
    await Subreddit.deleteMany({});

    const hashedPassword = await bcrypt.hash('password', 10);

    const user1 = new User({
      username: 'user1',
      email: 'user1@example.com',
      password: hashedPassword,
    });

    const user2 = new User({
      username: 'user2',
      email: 'user2@example.com',
      password: hashedPassword,
    });

    await user1.save();
    await user2.save();

    const subreddit1 = new Subreddit({
      name: 'Technology',
      description: 'All about technology',
      created_by: user1._id,
    });

    const subreddit2 = new Subreddit({
      name: 'Gaming',
      description: 'All about gaming',
      created_by: user2._id,
    });

    await subreddit1.save();
    await subreddit2.save();

    const post1 = new Post({
      title: 'First Post',
      body: 'This is the body of the first post.',
      author_id: user1._id,
      subreddit_id: subreddit1._id,
      votes: { upvotes: 10, downvotes: 2 },
      comments: [
        {
          body: 'This is a comment.',
          author_id: user2._id,
        },
      ],
    });

    const post2 = new Post({
      title: 'Second Post',
      body: 'This is the body of the second post.',
      author_id: user2._id,
      subreddit_id: subreddit2._id,
      votes: { upvotes: 20, downvotes: 1 },
      comments: [
        {
          body: 'This is another comment.',
          author_id: user1._id,
        },
      ],
    });

    await post1.save();
    await post2.save();

    console.log('Database seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();



const mongoose = require('mongoose');
const User = require('./models/User');
const Subreddit = require('./models/Subreddit');
const Post = require('./models/Post');
const config = require('./config');

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const seedDatabase = async () => {
    const subreddits = await Subreddit.insertMany([
        { name: 'webdev' },
        { name: 'reactjs' },
        { name: 'nodejs' },
        { name: 'javascript' }
    ]);

    const posts = await Post.insertMany([
        { title: 'Best Practices for Web Development', content: 'Here are some of the best practices...', subreddit: subreddits[0]._id },
        { title: 'React Hooks Overview', content: 'An overview of React hooks...', subreddit: subreddits[1]._id },
        { title: 'Node.js Performance Tips', content: 'Improve your Node.js app performance...', subreddit: subreddits[2]._id },
        { title: 'Understanding Closures in JavaScript', content: 'Closures are an important concept...', subreddit: subreddits[3]._id }
    ]);

    await User.create({
        username: 'john_doe',
        password: 'password123', // Ideally, hash this password
        subscribedSubreddits: [subreddits[0]._id, subreddits[1]._id],
        upvotes: 10
    });

    console.log('Database seeded');
    mongoose.connection.close();
};

seedDatabase();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');

const userRoutes = require('./routes/userRoutes');
const subredditRoutes = require('./routes/subredditRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api', userRoutes);
app.use('/api', subredditRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api', authRoutes);

module.exports = app;



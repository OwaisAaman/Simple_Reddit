const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.signup = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const user = new User({ email, username, password });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ userId: user._id }, config.jwtSecret);
    res.send({ token, user });
  } catch (error) {
    res.status(400).send(error);
  }
};

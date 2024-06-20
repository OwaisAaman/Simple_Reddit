const express = require('express');
const { createSubreddit, getSubreddits } = require('../controllers/subredditController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createSubreddit);
router.get('/', getSubreddits);

module.exports = router;

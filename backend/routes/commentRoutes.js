const express = require('express');
const { createComment, getComments } = require('../controllers/commentController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createComment);
router.get('/:postId', getComments);

module.exports = router;

const express = require('express');
const { vote } = require('../controllers/voteController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, vote);

module.exports = router;

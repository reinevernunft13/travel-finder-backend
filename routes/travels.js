const express = require('express');
const router = express.Router();

const getTravels = require('../controllers/travels.js');

router.get('/travels', getTravels);

module.exports = router;
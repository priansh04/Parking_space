const express = require('express');
const { addParking, calculateCost } = require('../controllers/parkingController');
const router = express.Router();

router.post('/add', addParking);
router.post('/calculate-cost', calculateCost);

module.exports = router;

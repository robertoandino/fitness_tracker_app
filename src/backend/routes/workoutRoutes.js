const express = require('express');
const router = express.Router();
const { getAllWorkouts, addWorkout } = require('../controllers/workoutController')

router.get('/', getAllWorkouts);
router.post('/', addWorkout);

module.exports = router;
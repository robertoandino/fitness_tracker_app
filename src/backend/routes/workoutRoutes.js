const express = require('express');
const router = express.Router();
const { getAllWorkouts, addWorkout } = require('../controllers/workoutController');
const { authenticateToken } = require('../middleware/authMiddleware');

//router.get('/', getAllWorkouts);
router.post('/', authenticateToken, addWorkout);
router.get('/:id', getAllWorkouts);

module.exports = router;
const express = require('express')
const router = express.Router();
const { registerUser, loginUser, getProfile } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authenticateToken, getProfile);

module.exports = router;
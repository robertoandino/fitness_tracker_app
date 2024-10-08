const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile, addUser, } = require('../controllers/userController');

router.get('/:id/profile', getUserProfile);
router.put('/:id/profile', updateUserProfile);
router.post('/', addUser);

module.exports = router;
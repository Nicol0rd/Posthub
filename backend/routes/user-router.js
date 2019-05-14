'use strict'

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.post('/log-in', userController.login);

router.post('/signup', userController.signup);
router.post('/edit', userController.update);
router.use('/viewAllFriends', userController.viewAllFriends);
router.post('/sendFriendRequest', userController.sendFriendRequest);
router.use('/all', userController.viewAll);

router.use('/test', userController.test);

module.exports = router;
'use strict'

const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');


router.post('/createInOwnWall', postController.createInOwnWall);
router.post('/createInFriendWall', postController.createInFriendWall);
router.post('/edit', postController.update);
router.post('/delete', postController.delete);

router.use('/allByUser', postController.findAllByUser);
router.use('/allInWall', postController.findAllPostsInWall);
router.use('/all', postController.viewAll);
router.use('/test', postController.test);

module.exports = router;
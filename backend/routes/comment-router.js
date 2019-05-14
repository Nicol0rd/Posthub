'use strict'

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment-controller');


router.post('/create', commentController.create);
router.post('/update', commentController.update);
router.delete('/delete', commentController.delete);
router.use('/all', commentController.all);
router.use('/test', commentController.test);

module.exports = router;
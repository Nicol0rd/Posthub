'use strict'

const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');


router.post('/create', postController.create);
router.post('/update', postController.update);
router.delete('/delete', postController.delete);

router.use('/all', postController.findAllByUser);
router.use('/test', postController.test);

module.exports = router;
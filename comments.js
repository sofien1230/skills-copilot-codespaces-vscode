// Create web server for comment

//import module

const express =  require('express');
const router = express.Router();
const commentController =  require('../controllers/comments');

//Handle request
router.get('/', commentController.comment_list);
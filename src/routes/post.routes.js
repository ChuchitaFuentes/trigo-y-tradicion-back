const express = require ('express');
const postController = require('../controllers/post.controller');
const router = express.Router();

router.get('/', postController.getAllPost); //endpoint http://localhost:3000/posts/

router.get('/:id', postController.getPostById); //endpoint http://localhost:3000/posts/:id http://localhost:3000/posts/:1

router.post('/', postController.createPost); //endpoint http://localhost:3000/posts/

router.put('/:id', postController.updatePost); //endpoint http://localhost:3000/posts/:id http://localhost:3000/posts/:1

router.delete('/:id', postController.deletePost); 
module.exports = router;
import * as blogController from '../controllers/blogController.js';
import express from "express";
const route = express.Router();

//create route
route.post('/create-blog', blogController.createBlog);

//read route
route.get('/read-blog', blogController.readBlog);

//update route
route.put('/update-blog/:id', blogController.updateBlog);

//delete route
route.delete('/delete-blog/:id', blogController.deleteBlog);

export default route
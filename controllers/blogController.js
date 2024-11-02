import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

const blogs = [] // initial blogs array

// Create blog post method
export const createBlog = (req, res)=>{
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
        return res.status(400).json({ error: "Title, content, and author are required." });
    }
    const newBlog = { id: uuidv4(), title, content, author, createdAt: new Date() };
    blogs.push(newBlog);
    res.status(201).json({status: "success", message: "Blog created successfully", data: newBlog}); // 201 Created

}

// Read blog get method
export const readBlog =(req, res)=>{
    res.status(200).json({status: "success", message: "Blog Read successfully", data: blogs});
}

// update blog put method
export const updateBlog = (req, res)=>{
    const id = req.params.id
    const { title, content, author } = req.body;

    const blogIndex = blogs.findIndex(b => b.id === req.params.id);
    if (blogIndex === -1) {
        return res.status(404).json({ error: "Blog post not found." }); // 404 Not Found
    }
    const updatedBlog = { ...blogs[blogIndex], title, content, author, updatedAt: new Date() };
    blogs[blogIndex] = updatedBlog;
    res.status(200).json({status: "success", message: "Blog update successfully", data: updatedBlog});


}

// delete blog delete method
export const deleteBlog =(req, res)=>{
    const blogIndex = blogs.findIndex(b => b.id === req.params.id);
    if (blogIndex === -1) {
        return res.status(404).json({ error: "Blog post not found." }); // 404 Not Found
    }
    const deletedBlog = blogs.splice(blogIndex, 1);
    res.status(200).json({status: "success", message: "Blog delete successfully", data: deletedBlog});
}
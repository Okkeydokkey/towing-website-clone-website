const Blog = require("../models/Blog");

// GET all blogs (Blog page ke liye)
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

// GET single blog
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blog" });
  }
};

// POST create blog (Admin AddBlog.jsx ke liye)
const createBlog = async (req, res) => {
  try {
    const { title, content, excerpt, author, category, image } = req.body;

    const newBlog = await Blog.create({
      title: title || "Untitled Blog",
      content: content || "",
      excerpt: excerpt || (content ? content.substring(0, 100) : ""),
      author: author || "Admin",
      category: category || "General",
      image: image || "",
    });

    res.status(201).json(newBlog);
  } catch (error) {
    console.error("CREATE BLOG ERROR:", error);
    res.status(500).json({ message: "Failed to create blog", error: error.message });
  }
};
// PUT update blog (Admin ManageBlog.jsx ke liye)
const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog" });
  }
};

// DELETE blog
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog" });
  }
};

module.exports = { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
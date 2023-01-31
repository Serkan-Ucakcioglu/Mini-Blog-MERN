const Blog = require("../model/blogSchema");

const getAllBlog = async (req, res) => {
  try {
    const blogList = await Blog.find();

    res.status(200).json(blogList);
  } catch (error) {
    res.status(404).json(error?.message);
  }
};

module.exports = getAllBlog;

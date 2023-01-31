const Blog = require("../model/blogSchema");

const getAllBlog = async (req, res) => {
  try {
    const blogList = await Blog.find();

    res.status(200).json(blogList);
  } catch (error) {
    res.status(404).json(error?.message);
  }
};

const addBlog = async (req, res) => {
  try {
    const { title, url, description } = req.body;
    const checkList = await Blog.findOne({ title });
    if (checkList) {
      return res.status(404).json("already on this blog");
    }
    const newBlog = await Blog.create({ title, url, description });
  } catch (error) {
    res.status(404).json(error?.message);
  }
};

module.exports = { getAllBlog, addBlog };

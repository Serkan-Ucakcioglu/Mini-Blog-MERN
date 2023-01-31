const express = require("express");
const { getAllBlog, addBlog } = require("../controlelr/blogController");

const router = express.Router();

router.get("/blogList", getAllBlog);
router.post("/add-blog", addBlog);

module.exports = router;

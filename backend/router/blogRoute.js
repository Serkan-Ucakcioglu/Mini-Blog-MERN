const express = require("express");
const getAllBlog = require("../controlelr/blogController");

const router = express.Router();

router.get("/blogList", getAllBlog);

module.exports = router;

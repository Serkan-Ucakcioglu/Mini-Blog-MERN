const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect");
const blogRoute = require("./router/blogRoute");

dbConnect();

app.use("/", blogRoute);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);

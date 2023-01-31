const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect");
const blogRoute = require("./router/blogRoute");

dbConnect();
app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
  })
);
app.use("/", blogRoute);
app.use(express.json());

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);

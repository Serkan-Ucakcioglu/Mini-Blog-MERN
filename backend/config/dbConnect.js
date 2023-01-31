const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION);
    console.log("connected mongodb");
  } catch (error) {
    console.log(error.message || error);
  }
};

module.exports = dbConnect;

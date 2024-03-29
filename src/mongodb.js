const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/UserAuth")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("Failde to connect");
  });

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection=new mongoose.model("Collection1",loginSchema)

module.exports=collection
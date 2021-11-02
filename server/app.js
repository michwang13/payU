const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/chatDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/server/test", function (req, res) {
  res.send("michael wang here");
});

app.listen("5000", function () {
  console.log("Started server with port 5000");
});

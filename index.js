const express = require("express");

const env = require("dotenv");

const app = express();

var cors = require("cors");

env.config();

app.use(cors());

let arr = [];

app.get("/api/v1/users", function (req, res) {
  res.send(arr);
});

app.post("/api/v1/users", function (req, res) {
  arr.push({
    title: req.body.title,
    id: Math.now(),
  });

  res.send("document added");
});

app.listen(process.env.PORT, () => {
  console.log("server is Started ", process.env.PORT);
});

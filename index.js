const env = require("dotenv");
env.config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login</h1>");
});

app.get("/port", (req, res) => {
  res.send(`${process.env.PORT}`);
});

app.listen(process.env.PORT, () => {
  console.log("server is Started ", process.env.PORT);
});

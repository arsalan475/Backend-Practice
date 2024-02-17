const env = require("dotenv");
env.config();
console.log(process.env.PORT);

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login</h1>");
});

app.listen(3000, () => {
  console.log("server is Started ", process.env.PORT);
});

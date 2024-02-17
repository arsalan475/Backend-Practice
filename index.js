require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`Home`);
});

app.get("/login", (req, res) => {
  res.send("Login");
});

app.listen(process.env.PORT, () => {
  console.log("server is Started ", process.env.PORT);
});

require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`Home`);
});

app.get("/login", (req, res) => {
  res.send("Login");
});

app.listen(3000, () => {
  console.log("server is Started ");
});

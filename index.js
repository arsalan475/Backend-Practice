const express = require("express");
const path = require("path");

const env = require("dotenv");
env.config();

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/login", (req, res) => {
  res.render("Login");
});

app.get("/port", (req, res) => {
  res.render("Port", { port: process.env.PORT });
});

app.listen(process.env.PORT, () => {
  console.log("server is Started ", process.env.PORT);
});

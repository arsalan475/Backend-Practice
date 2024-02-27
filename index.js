const express = require("express");

const env = require("dotenv");

const app = express();

var cors = require("cors");

env.config();

app.use(cors());

app.use(express.json());

// app.use(express.urlencoded({ extended: "true" }));

let arr = [];

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/api/v1/users", function (req, res) {
  res.send(arr);
});

app.post("/api/v1/users", function (req, res) {
  let { title } = req.body;
  arr.push({
    title: title,
    id: Date.now(),
  });

  res.json({ message: "User added successfully", Data: arr });
});

app.delete("/api/v1/users/:id", (req, res) => {
  const { id } = req.params;
  const index = arr.findIndex((user) => user.id === Number(id));
  if (index === -1) {
    res.send("user not found");
    return;
  }
  arr.splice(index, 1);
  res.json({ message: "User deleted successfully" });
});

app.put("/api/v1/users/:id", (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  const index = arr.findIndex((user) => user.id === Number(id));
  if (index === -1) {
    res.send("user not found");
    return;
  }
  arr[index].title = title;
  res.json({ message: "User updated successfully", Data: arr });
  console.log(arr);
});

app.listen(process.env.PORT, () => {
  console.log("server is Started ", process.env.PORT);
});

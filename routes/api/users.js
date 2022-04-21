// REQUIRED PACKAGES EXPRESS
const express = require("express");
const router = express.Router();
const users = require("../../users");
// GET ALL USERS
app.get("/", (req, res) => {
  res.json(users);
});
// GET SINGLE USER
app.get("/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    // res.status(404).json({ Message: "User Not Found" });
  }
  res.json(user);
});

// MODULE EXPORTS
module.exports = router;
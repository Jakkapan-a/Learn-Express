// REQUIRED PACKAGES EXPRESS
const express = require("express");
const { UnauthorizedError } = require("express-jwt");
const router = express.Router();

const users = require("../../users");
// REQUIRED UUID
const uuid = require("uuid");
// GET ALL USERS
router.get("/", (req, res) => {
  res.json(users);
});
// GET SINGLE USER
router.get("/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    res.status(404).json({ Message: "User Not Found" });
  }
  res.json(user);
});
// header : Content-Type: application/json
// CREATE NEW USER
router.post("/", (req, res) => {
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
  };
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ Message: "Please provide a name and email" });
  }
  users.push(newUser);
  res.redirect('/');
});
// UPDATE USER
router.put("/:id", (req, res) => {
  let found = users.some((user) => user.id === parseInt(req.params.id));
  if (!found) {
    return res.status(404).json({ Message: "User Not Found" });
  }
  const updateUser = req.body;
  users.forEach((user) => {
    if (user.id === parseInt(req.params.id)) {
      user.name = updateUser.name ? updateUser.name : user.name;
      user.email = updateUser.email ? updateUser.email : user.email;

      res.json({ Message: "User Updated", user });
    }
  });
});
// DELETE USER
router.delete("/:id", (req, res) => {
  let found = users.some((user) => user.id === parseInt(req.params.id));
  if (!found) {
    return res.status(404).json({ Message: "User Not Found" });
  }
  res.json({
    Message: "User Deleted",
    users: users.filter((user) => user.id !== parseInt(req.params.id))
  });
});
// MODULE EXPORTS
module.exports = router;

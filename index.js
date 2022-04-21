// REQUIRED PACKAGES EXPRESS
const express = require("express");
const app = express();
const path = require("path");

// REQUIRED DOTENV
require("dotenv").config();

// SETTING UP THE PORT
const PORT = process.env.PORT || 5000;
// SET ARRAY
const users = [
  {
    id: 1,
    name: "John",
    email: "John@gmail.com",
    age: 21,
  },
  {
    id: 2,
    name: "Miler",
    email: "miler@gmail.com",
    age: 21,
  },
    {
    id: 3,
    name: "Will",
    email: "will@gmail.com",
    age: 21,
}
];
// SET API
app.get("/api/users", (req, res) => {
  res.json(users);
});
// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

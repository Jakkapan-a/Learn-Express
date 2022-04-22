// REQUIRED PACKAGES EXPRESS
const express = require("express");

const path = require("path");
// REQUIRED LOGGER
const logger = require("./middleware/logger");
// Loads the handlebars module
const exphbs = require("express-handlebars");

// Load users from the users.js file
const users = require("./users");
// CREATE APP
const app = express();

// Init middleware
app.use(logger);

// HANDLES MIDDLEWARE
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// HOME PAGE ROUTE
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    name: "Andrew Mead",
    message: "Welcome to my website",
    users
  });
});

// BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET USERS FROM USERS.JS
app.use("/api/users/", require("./routes/api/users"));

// REQUIRED DOTENV
require("dotenv").config();

// SETTING UP THE PORT
const PORT = process.env.PORT || 5000;

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

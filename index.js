// REQUIRED PACKAGES EXPRESS
const express = require("express");
const path = require("path");


// REQUIRED LOGGER
const logger = require("./middleware/logger");
const app = express();
// GET USERS FROM USERS.JS

// app.use('/api/users/', require('./routes/api/users'));

// Init middleware
// app.use(logger);
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

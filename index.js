// Required express package
const express = require('express');
const app = express();

// Required dotenv package
require('dotenv').config();

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);
const express = require('express');
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/citronzaledatabase", {
    useNewUrlParser: true, // Corrected option name
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Successfully connected to the database");
})
.catch((error) => {
    console.error("Error connecting to the database:", error);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});
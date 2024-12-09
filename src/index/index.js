const express = require("express");
const morgan = require("morgan");
const { connectDB } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(morgan("dev"));
app.use(express.json);
connectDB();
console.log("dataBase connected");
app.use(express.static("src"));
app.listen(6000);
console.log("server on port, viva la argoyaa", 6000);
module.exports = app;

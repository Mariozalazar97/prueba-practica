const express = require("express");
const morgan = require("morgan");
const { connectDB } = require("../db");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

//base de datos
connectDB();
console.log("dataBase connected");

//entrega todos los archivos de este directorio
app.use(express.static("src"));

//montando servidor
app.listen(8080);
console.log("server on port, viva la argoyaa", 8080);
module.exports = app;

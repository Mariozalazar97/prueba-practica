const morgan = require("morgan");
const { connectDB } = require("./db");
const Login = require("./middlewares/login.user.middleware");
const registroDeUsuario = require("./middlewares/registerUser.middleware");
const { Router } = require("express");
const express = require("express");
const Publicacion = require("./middlewares/publicacion.middlewares");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

//base de datos
connectDB();
console.log("dataBase connected");

//routes

const router = Router();
app.use(router);
router.post("/loginuser", Login);
router.post("/registrodeusuario", registroDeUsuario);
router.post("/nuevapublicacion", Publicacion);

app.use(express.static("src"));

module.exports = app;

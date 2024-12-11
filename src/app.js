const morgan = require("morgan");
const { connectDB } = require("./db");
const LoginVendedor = require("./middlewares/login.Vendedores");
const Login = require("./middlewares/login.user.middleware");
const registroDeUsuario = require("./middlewares/registerUser.middleware");
const { Router } = require("express");
const express = require("express");
const registroDeVendedores = require("./middlewares/registerVenededor.middlewares");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//base de datos
connectDB();
console.log("dataBase connected");

//routes

const router = Router();
app.use(router);
router.post("/loginvendedor", LoginVendedor);
router.post("/registrovendedor", registroDeVendedores);
router.post("/loginuser", Login);
router.post("/registrodeusuario", registroDeUsuario);
//  console.log("datos recibidos:", req.body);
//const { username, email, password } = req.body;
//  if (!username || !email || !password) {
//    return res.status(400).json({ error: "todos los campos son obligatorios" });
//  }
//  res.status(201).json({ message: "usuario registrado" }); // unicamente anda usando esta config, no importa el registerUser mucho muy importante porque va a hacer lo mismo con los demas//

//entrega todos los archivos de este directorio
app.use(express.static("src"));

module.exports = app;

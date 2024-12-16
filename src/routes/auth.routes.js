const Router = require("express");
const Login = require("../middlewares/login.user.middleware");
const registroDeUsuario = require("../middlewares/registerUser.middleware");
const Publicacion = require("../middlewares/publicacion.middlewares");
const router = Router();
app.use(router);
router.post("/loginuser", Login);
router.post("/registrodeusuario", registroDeUsuario);
router.post("/nuevapublicacion", Publicacion);

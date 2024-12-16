const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

const JWT_SECRET = "viva_el_amor";

const registroDeUsuario = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res
        .status(400)
        .send({ message: "todos los campos son obligatorios" });
    }
    const HashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: HashedPassword,
    });
    const savedUser = await newUser.save();

    const token = jwt.sign({ userId: savedUser._id }, JWT_SECRET, {
      expiresIn: "2h",
    });
    res.status(201).send({ message: "usuario registrado exitosamente" });
    console.log(token);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error al registrar" });
  }
};

module.exports = registroDeUsuario;

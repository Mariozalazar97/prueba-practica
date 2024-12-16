const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models//user.models");

const JWT_SECRET = "viva_el_amor ";

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "usuario no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "contraseña incorrecta" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "2h",
    });

    res.cookie("sesion", token, { maxAge: 900000, httpOnly: true });

    res.status(200).json({ message: "login user exitoso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error en el login" });
  }
};

module.exports = Login;

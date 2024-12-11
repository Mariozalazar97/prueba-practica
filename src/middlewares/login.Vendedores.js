const bcrypt = require("bcryptjs");

const LoginVendedor = async (req, res) => {
  const { clave, password } = req.body;

  try {
    const vendedor = await vendedor.findOne({ clave });
    if (!vendedor) {
      return res.status(404).json({ message: "vendedor no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, vendedor.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "contraseña incorrecta" });
    }

    const token = jwt.sign({ vendedorId: vendedor._id }, JWT_SECRET, {
      expiresIn: "5h",
    });

    res.cookie("sesion", token, { maxAge: 900000, httpOnly: true });

    res.status(200).json({ message: "login vendedor exitoso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error en el login" });
  }
};

module.exports = LoginVendedor;

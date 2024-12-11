const registroDeVendedores = async (req, res) => {
  const { name, clave, password } = req.body;
  try {
    const HashedPassword = await bcrypt.hash(password, 10);

    const Vendedor = new newVendedor({
      name: req.body.name,
      clave: req.body.clave,
      password: HashedPassword,
    });
  } catch (error) {}
};

module.exports = registroDeVendedores;

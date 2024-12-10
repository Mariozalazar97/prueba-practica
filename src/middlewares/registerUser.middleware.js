const registroDeUsuario = async (res, req) => {
  const { username, email, password } = req.body;
  try {
    const HashedPassword = await bcrypt.hash(password, 10);

    const User = newUser({
      username: req.body.username,
      email: req.body.password,
      password: HashedPassword,
    });

    await User.save();

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
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

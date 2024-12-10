const Publicacion = async (req, res) => {
  console.log(jwt.decode(req.cookies.sesion));

  const { userId: owner } = jwt.decode(req.cookies.sesion);
  const { title, message } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(owner)) {
      return res.status(400).json({ message: "el id no es bueno" });
    }

    console.log({
      owner,
      title,
      message,
    });

    const publicacionEsValida = await User.findById(owner);
    if (!publicacionEsValida) {
      return res.status(400).json({ message: "revisar usuario" });
    }

    const nuevaPublicacion = newPublicacion({
      title: req.body.title,
      message: req.body.message,
      owner: owner,
      createDate: req.body.createDate,
    });

    await nuevaPublicacion.save();

    res.status(200).json({ message: "publicacion enviada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error en la publicacion" });
  }
};

module.exports = { nuevaPublicacion, publicacionEsValida, Publicacion };

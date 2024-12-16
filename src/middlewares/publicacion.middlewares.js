const newPublicacion = require("../models/publicacion.models");
const jwt = require("jsonwebtoken");
const decode = require("cookie-parser");

const Publicacion = async (req, res) => {
  try {
    const token = req.cookies.session;
    if (!token) {
      return res.status(403).json({ message: "no hay acceso" });
    }
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const { userId: owner } = decodedToken;

    const { title, message } = req.body;

    if (!mongoose.Types.ObjectId.isValid(owner)) {
      return res.status(400).json({ message: "el id no es valid" });
    }

    const publicacionEsValida = await User.findById(owner);
    if (!publicacionEsValida) {
      return res.status(400).json({ message: "revisar usuario" });
    }

    const nuevaPublicacion = new newPublicacion({
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

module.exports = Publicacion;

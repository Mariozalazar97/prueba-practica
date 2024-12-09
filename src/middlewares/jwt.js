const jwt = require("jsonwebtoken");

const JWT_SECRET = "miJWTSECRET";

const verifyToken = (req, res, next) => {
  const token = req.header("authorization")?.replace("bearer", "");
  if (!token) {
    return res.status(401).json({ message: "acceso no autorizado" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "token invalido o expirado" });
  }
};

module.exports = verifyToken;

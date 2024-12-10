const LoginVendedor = require("../middlewares/login.Vendedores");
const router = require("./router");

router.post("/loginVendedor", LoginVendedor);

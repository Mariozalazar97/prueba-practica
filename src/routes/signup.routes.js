const Login = require("../middlewares/login.middleware");
const router = require("./router");

router.post("/signUp", Login);

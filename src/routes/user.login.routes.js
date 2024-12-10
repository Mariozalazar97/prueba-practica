const router = require("./router");
const Login = require("../middlewares/login.user.middleware");

router.post("/loginUser", Login);
console.log("viva el ocote");

module.export = router.post;

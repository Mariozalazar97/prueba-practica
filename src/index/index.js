const express = require("express");
const App = require("../app");

const app = express();
//montando servidor
const PORT = 8080;
app.listen(PORT, () => {
  console.log("server on port 8080", PORT);
});

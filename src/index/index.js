const express = require("express");
const app = require("../app");

//montando servidor
const PORT = 8080;
app.listen(PORT, () => {
  console.log("server on port 8080", PORT);
});

module.exports = app;

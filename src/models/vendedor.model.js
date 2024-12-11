const mongoose = require("mongoose");

const vendedorSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Clave: {
    type: Number,
    required: true,
    trim: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

module.exports = vendedorSchema;

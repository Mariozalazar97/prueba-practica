const mongoose = require("mongoose");

const vendedorSchema = mongoose.Schema({
  Name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  Clave: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  Password: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = ("Vendedor", vendedorSchema);

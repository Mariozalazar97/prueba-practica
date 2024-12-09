const mongoose = require("mongoose");

const PublicacionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Publicacion", PublicacionSchema);

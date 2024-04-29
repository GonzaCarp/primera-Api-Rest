const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
    },
    apellido: {
      type: String,
      required: true
    },
  edad: {
    type: Number,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  domicilio: {
    type: String,
    required: true
  },
  pais: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('user', userschema);
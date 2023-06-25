const mongoose = require('mongoose');

const CopiaSchema = new mongoose.Schema({
  pelicula: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pelicula',
    required: true
  },
  id_cinta: {
    type: String,
    required: true,
    unique: true
  },
  disponible: {
    type : Boolean,
    required: true,
    default: true
  }


});

module.exports = mongoose.model('Copia', CopiaSchema);
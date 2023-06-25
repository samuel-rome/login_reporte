const mongoose = require('mongoose');

// const PeliculaSchema = mongoose.Schema({
    
//     titulo: {
//         type: String,
//         require: true
//     },
//     genero: {
//         type: String,
//         require: true
//     },
//     director: {
//         type: String,
//         require: true
//     },
//     actores: {
//         type: String,
//         require: true
//     },
// });

const PeliculaSchema = new mongoose.Schema({
    titulo: {
      type: String,
      required: true
    },
    genero: {
      type: String,
      required: true
    },
    director: {
      type: String,
      required: true
    },
    actores: {
        type: String,
      required: true
    },
    copias: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Copia',
        default: []
      }]
  });


module.exports = mongoose.model('Pelicula', PeliculaSchema);


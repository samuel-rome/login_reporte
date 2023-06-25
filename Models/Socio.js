const mongoose = require('mongoose');

// const SocioSchema = mongoose.Schema({
    
//     nombre: {
//         type: String,
//         require: true
//     },
//     direccion: {
//         type: String,
//         require: true
//     },
//     telefono: {
//         type: Number,
//         require: true
//     },
//     fechaCreacion: {
//         type: Date,
//         default: Date.now()
//     },
//     peliculas: [{
//         id: { type: mongoose.Schema.ObjectId, ref: 'Prestamo' } 
//     }]

// });

const SocioSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true
    },
    direccion: {
      type: String,
      required: true
    },
    telefono: {
      type: Number,
      required: true
    },
    fechaCreacion: {
      type: Date,
      default: Date.now()
    },
    directorFavorito:{
        type: String,
        required: true
    },
    actorFavorito:{
        type: String,
        required: true
    },
    generoPreferido: {
        type: String,
        required: true
    },
    prestamo: [{
        type: mongoose.Schema.Types.ObjectId,
      ref: 'Prestamo'
    }]
  });
module.exports = mongoose.model('Socio',SocioSchema)
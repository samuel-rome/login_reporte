const mongoose = require('mongoose');

// const PrestamoSchema = mongoose.Schema({
    
//     socio: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Socio'
//     },
//     pelicula: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Pelicula'
//     },
//     entregado:{
//         type : Boolean,
//         default: false
//     },
//     fechaCreacion: {
//         type: Date,
//         default: Date.now()
//     }
// });
const PrestamoSchema = new mongoose.Schema({
    socio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Socio'
    },
    copia: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Copia'
    },
    fechaPrestamo:{
        type: Date,
        default: Date.now(),
        required: true
    },
    fechaDevolucion: {
        type:Date,
        required: true
    },
    entregado:{
        type:Boolean,
        default : false,
        required:true
    } 
  });

module.exports = mongoose.model('Prestamo', PrestamoSchema);;
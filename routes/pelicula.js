//Rutas producto
const express = require('express');
const router = express.Router();
const peliculaController = require('../Controller/PeliculaController');

//api/peliculas
router.post('/', peliculaController.crearPelicula);
router.get('/', peliculaController.obtenerPeliculas);
router.put('/:id', peliculaController.actualizarPelicula);
router.get('/:id', peliculaController.obtenerPelicula);
router.delete('/:id', peliculaController.eliminarPelicula);

module.exports = router;
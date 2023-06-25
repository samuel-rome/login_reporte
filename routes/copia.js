const express = require('express');
const router = express.Router();
const copiaController = require('../Controller/CopiaController');

//api/peliculas
router.post('/', copiaController.crearCopia);
router.get('/', copiaController.obtenerCopias);
router.delete('/:id', copiaController.eliminarCopia);

module.exports = router;
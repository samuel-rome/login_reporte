//Rutas producto
const express = require('express');
const router = express.Router();
const socioController = require('../Controller/SocioController');

//api/productos
router.post('/', socioController.crearSocio);
router.get('/:id', socioController.obtenerSocio);
router.get('/', socioController.obtenerSocios);
router.put('/:id', socioController.actualizarSocio);
router.delete('/:id', socioController.eliminarSocio);

module.exports = router;
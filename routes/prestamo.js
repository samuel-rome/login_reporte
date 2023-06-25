//Rutas producto
const express = require('express');
const router = express.Router();
const prestamoController = require('../Controller/PrestamoController');

//api/prestamo
router.post('/', prestamoController.crearPrestamo);
router.get('/', prestamoController.obtenerPrestamos);
router.put('/:id', prestamoController.devolverPrestamo);
router.delete('/:id', prestamoController.eliminarPrestamoHecho);

module.exports = router;
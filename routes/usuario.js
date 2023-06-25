//Rutas producto
const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

//api/usuario
router.post('/', userController.crearUsuario);
router.post('/', userController.obtenerUsuario);

module.exports = router;
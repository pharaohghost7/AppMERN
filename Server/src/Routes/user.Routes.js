const express = require('express');
const userController = require('../Controller/usuarios/UsuariosController')

const route = express.Router()

route.get('/', userController.obtener)
route.post('/', userController.crear)



module.exports = route;
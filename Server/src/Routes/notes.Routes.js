const express = require('express');
const notesController = require('../Controller/Notes/NotesController')

const route = express.Router();

route.get('/', notesController.obtener)
route.post('/', notesController.crear)
route.patch('/:id', notesController.actualizar)

module.exports = route;
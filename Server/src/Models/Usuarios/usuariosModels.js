const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const schemaUsuario = new Schema({
    UserName: {type: String, trim: true},
    nombres: {type: String, trim: true},
    email: {type: String, trim: true},
    edad: {type: Number},
    fecha: {type: Date, default: Date.now}
});

const Users = model('Usuarios', schemaUsuario);

module.exports = Users;
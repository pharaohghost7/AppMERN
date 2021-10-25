const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const schemaNotes = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, },
    note: {type: String, required: true, }
}, {
    timestamps: true
});

const Notes = model('Notes', schemaNotes)

module.exports = Notes;

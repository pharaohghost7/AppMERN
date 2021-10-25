
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './.env'});


const URI = 'mongodb://localhost:27017/Notas';//direccion de la base de datos
const URI2 = process.env.URI2

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Base de datos conectada'))
    .catch(error => console.log(error))


    module.export = mongoose;
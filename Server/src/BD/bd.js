
const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27017/Notas';//direccion de la base de datos
const URI2 = 'mongodb+srv://andresb:12345ab@cluster0.cqqrc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Base de datos conectada'))
    .catch(error => console.log(error))


    module.export = mongoose;
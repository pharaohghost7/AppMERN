
const express = require('express') //Express creamos servidor 
const morgan = require('morgan') // muestras las peticiones
const cors = require('cors') // maneja las rutas para peticiones
const BodyParser = require('body-parser') // manejamos los json 
const moongose = require('./BD/bd')


const app = express();

app.set('port', process.env.PORT || 4000);

//midleware

app.use(morgan('dev'));
app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());
app.use(cors());

//Routes

app.use('/notes/', require('./Routes/notes.Routes'));
app.use('/users/', require('./Routes/user.Routes'))

//Starting server

app.listen(app.get('port'), ()=>{
    console.log('server On')
})
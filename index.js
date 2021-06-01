const express = require('express')
require('dotenv').config();
const cors = require('cors');
const {Router} = require('express')  //esto va separado



const app = express()

//CORS
app.use(cors()) //aqui ya configuro el CORDS mas facil

app.use( express.static('public'))

//lectura y parseo del body
app.use( express.json())

/*app.use((req, res, next) => {  //esta es la configuracion del CORDS para hacer peticiones a mi api
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});*/


app.use('/api/auth', require('./routes/auth') );
app.use('/api/auth',require('./routes/authUser')) //esto es solo prueba
app.use('/api', require('./routes/search') )



app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
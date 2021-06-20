const express = require('express')
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');


const app = express()

//conectar Db
const conectardb = async() =>{
  await  dbConnection()
}

conectardb()



//CORS
app.use(cors()) //aqui ya configuro el CORDS mas facil

/*app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
      // allowed XHR methods  
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});*/

app.use( express.static('public'))

//lectura y parseo del body
app.use( express.json())




app.use('/', require('./routes/authUser'))

app.use('/api/auth', require('./routes/auth') );
app.use('/api/auth',require('./routes/authUser')) 
app.use('/api', require('./routes/search') )




app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
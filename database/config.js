const mongoose = require('mongoose')

const dbConnection = async() => {

  try {
      
     await mongoose.connect('mongodb+srv://Raul_Admin:60aNj0FLWAiTsRsY@cluster0.bkgoo.mongodb.net/Spotify_Search', {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
         useFindAndModify: true
      
      
     })

     console.log('Base de Datos online');

  } catch (error) {
      console.log(error);
      throw new Error('Error a la hora de inicializar el proceso en base de datos')
  }

}


module.exports = {
    dbConnection
}
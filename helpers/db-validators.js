const Usuario = require('../models/usuario');


const existeUsuarioPorId = async( id = '' ) => {
   
    const existeUsuario = await Usuario.findById(id)
    if ( !existeUsuario ) {
       throw new Error(`El id no existe: ${ id } ya esta registrado`)
    }

}


module.exports = {
    existeUsuarioPorId
}




const { Schema, model } = require('mongoose')


const UsuarioSchema =  Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']  //true: es requerido, 2do argumento: mensaje
    },
    correo:{
        type:String,
        unique: true //un solo correo electronico 
    },
    password:{
        type:String,
        unique: true //un solo password
    },
    estado: {
        type: Boolean,
        default: true
    },
    spotify: {
        type: Boolean,
        default: false
    },
});

module.exports = model( 'Usuario', UsuarioSchema )
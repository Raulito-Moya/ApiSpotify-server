



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


UsuarioSchema.methods.toJSON = function(){  //aqui modifico el metodo toJSON del Schema para que me retorne todo menos la __v y el password 
    const { __v, password, _id, ...usuario } = this.toObject();
    usuario.uid = _id //modifico el id para que me retorne como uid
    return usuario
  }

module.exports = model( 'Usuario', UsuarioSchema )
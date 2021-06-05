const { response, request } = require('express')
const bcryptjs = require('bcryptjs');  //este paquete para encriptar la contrasena

const Usuario = require('../models/usuario')


const { authorizeUserFetch, getTokenUserFetch, refreshToken, getUser, getTokenWithoutCode } = require('../helpers/spotifyAuth/index')



const authToken = (req, res = response) => { //este es para logear usuarios que no tienen cuenta en spotify
   
    const token = getTokenWithoutCode()

}


const login = async(req, res) => {

  const { nombre, correo } = req.body
       
  const checkUser = await Usuario.findOne({correo})
  
   if(!checkUser){

    return res.status(400).json({
       msg:'No se encontro usuario'
     })
   } else{
      
     res.json({
       user:checkUser
     })

   }


}


const authUser = async(req = request, res = response) => {
  
   const { nombre, correo, password } = req.body
     
   
    const checkuser = await Usuario.findOne({correo})

    if(checkuser){

      return res.status(400).json({
        msg: 'Un usuario ya existe con ese email'
      })
    }


     const token = await getTokenWithoutCode()

    const user = new Usuario({nombre,password, correo })

    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync( password, salt ) //encripto la contrasena

     await user.save()

     res.json({
       user: user,
       token
     })

}


 const authorizeUser = async(req, res = response) => { //aqui el codigo de acceso para pedir el access token mas abajo

       const urlAuth = await authorizeUserFetch()
       res.json(urlAuth)
  
 }




 const authUserSpotify = async(req, res = response) => {  //aqui obtengo el acces token  y logue al usuario de spotify
    

     const { codigo } = req.body
    
      if( !codigo ){
       return res.status(500).json({
          msg: 'El codigo de validacion para acceder no se obtuvo'
        })
      }
 
       const { access_token:token } = await getTokenUserFetch(codigo) 

       const userdata = await getUser(token)  //obtnego info del usuario 
       const { display_name:nombre, email:correo, } = userdata
         
         const checkuser = Usuario.findOne({correo})

         if( checkuser ) {
           return res.status(400).json({
             msg:'Ya ese Usuario esta registardo'
           })
         }
       

        if( userdata ){  
            
          const user = new Usuario({nombre, correo, spotify:true})
          await user.save()
          console.log(user);

          res.status(200).json({
            msg: `Bienvenido ${nombre}`,
            token: token
           })

        } else {
          return res.status(500).json({
            msg: "Ha habido un error en la data recibida"
          })
        }

 }



 
 const authRefreshToken = async(req, res = response) => {   //para refrescar el token
      
       let { token } = req.body

      const { access_token } = await refreshToken(token)
 
       if( !access_token ){
         res.status(500).json({
           msg:'No se recibio un token refresh '
         })

       }

       if( access_token ){
         res.json({
           msg: 'token refreshed',
           token_refreshed: access_token
         })
       }

     
 }




 const updeteUser = async(req, res) => {

    const { id } = req.params
   
    const { ...usuariodata } = req.body
         

    const userUpdeted = await Usuario.findByIdAndUpdate(id, usuariodata)
     
     if(!userUpdeted){

      return res.status(400).json({
         msg:'No se modifico el usuario'
       })

     } else{
        
       res.json({
         userUpdeted: userUpdeted
       })

     }


}




 const deleteUser = async(req, res) => {
   
  const { id } = req.params
  console.log(id);
 

  const userDeleted = await Usuario.findByIdAndUpdate(id, {estado: false})

   if(!userDeleted){

    return res.status(400).json({
       msg:'No se elemino el usuario'
     })

   } else{
      
     res.json({
       userDeleted: userDeleted
     })

   }


}



module.exports= {
    authToken,
    login,
    updeteUser,
    deleteUser,
    authorizeUser,
    authUserSpotify,
    authUser,
    authRefreshToken
}
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

//esto ruta es solo un ejemplo 
const { authorizeUser, authTokenUserGet, authRefreshToken, authUserSpotify, authUser, login, deleteUser, updeteUser, getuserbyid }= require('../controllers/auth');
const { existeUsuarioPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

router.post(
      '/test',
      (req, res)=>{
            res.json({
                  frase:'Hola mundo'
            })
      }
)

router.post(  //logueo al usuario
      '/loginuser',[
       check('correo','El correo es obligatorio').isEmail(),
       check('password','El password es obligatorio').not().isEmpty(),
       validarCampos
      ],
      login
)

router.post(
      '/getuserbyid',[
         check('uid','El uid es requerido').isMongoId(),
         validarCampos
      ],
      getuserbyid
)



router.get(   //aqui obtengo el url para mandarselo al front y obtnener el codigo
     '/authorizeuser',
      authorizeUser
)

/*router.get(
      '/?code',
      authUserSpotify
)*/

router.post(      
       '/usertokenauth',[
          check('codigo','El codigo de autorizo es requerido').not().isEmpty(),   
          validarCampos 
       ],
       authUserSpotify  //logueo al usuario de spotify y obtengo el token por primer vez y obtnego el token
)




router.post(
      '/createuser',[
        check('nombre','El nombre es obligatorio').isAlpha().not().isEmpty(),
        check('correo','El correo es obligatorio').isEmail(),
        check('password','El password es obligatorio').not().isEmpty(),
        validarCampos
      ],
      authUser  // Logueo al usuario y obtengo el token por primer vez y obtnego el token
)


router.get(
      '/refreshtoken',
      authRefreshToken
)


router.put(
      '/deleteuser/:id',[
         check('id', 'No es un ID valido').isMongoId(),
         check('id').custom( existeUsuarioPorId ), 
         validarCampos
      ],
      deleteUser 
)

router.put(
      '/updateuser/:id',[
        check('id', 'No es un ID valido').isMongoId(),
        check('id').custom( existeUsuarioPorId ), 
      ],
      updeteUser
)


module.exports = router;
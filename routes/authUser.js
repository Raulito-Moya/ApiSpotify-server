const { Router } = require('express');
const router = Router();

//esto ruta es solo un ejemplo 
const { authTokenUser, authTokenUserGet, authRefreshToken }= require('../controllers/auth')

router.get(
     '/usertoken',
      authTokenUser
)

router.get(
      '/usertokenget',
      authTokenUserGet
)

router.get(
      '/refreshtoken',
      authRefreshToken
)


module.exports = router;
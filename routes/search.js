const { Router } = require('express');
const router = Router();

const { search, searchinUser } = require('../controllers/search') 

router.get( //busqueda sencilla
    '/search',
       search
        )


 router.get( //busqueda cuando el usuario esta logeado con el token
      '/searchloged',
       searchinUser
 )       

module.exports = router        
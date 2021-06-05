//esta auth es para usuarios que no son de spotify 

const { Router } = require('express');
const router = Router();


const { authToken }= require('../controllers/auth')

router.get(
     '/token',
      authToken
)


module.exports = router;
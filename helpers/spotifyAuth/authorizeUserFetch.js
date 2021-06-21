const axios = require('axios');

const client_id = process.env.SPOTIFY_ID
const client_secret = process.env.CLIENT_SECRET


const authorizeUserFetch = () => {  //esta funcion es para obtener el codigo de autorizo ,pero como lo estoy obteniendo en el front no lo estoy usuando aca

    try {
     const url = axios({
          url:"https://accounts.spotify.com/authorize",
          method: "get",
          params: {
          client_id:'1de72a570fb94a9fa7dbab6d8dd16c24',
          response_type:'code',
          redirect_uri:'https://spotify-searching.herokuapp.com/',
          scope: 'user-read-email user-read-private'
        },
       /* headers:{
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
      */
 
        }).then( obj => { 
          const url = obj.request.res.responseUrl
          console.log(url);
            return url  //url  pra obtnener el codigo de validacion
       /* console.log(obj.request.res.responseUrl);
          const url = obj.request.res.responseUrl
           res.redirect(url)*/
           
        
       })

      return url  
     } catch (error) {
       //console.log(error);
     }



}


module.exports = authorizeUserFetch
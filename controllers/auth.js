const { response, text, json } = require('express')
const axios = require('axios')

const client_id = process.env.SPOTIFY_ID
const client_secret = process.env.CLIENT_SECRET


const authToken = (req, res = response) => { //este es el que tengo en mi app
   
  try {
      
    axios({
        url:"https://accounts.spotify.com/api/token",
        method: "post",
        params: {
            grant_type: "client_credentials"
        },
        headers:{
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
       auth: {
        username: client_id,
        password: client_secret
    }
    }).then( obj => { 
        const {data} = obj
        console.log(data);
        res.json({
           ok:true,
           token: data.access_token
        })
     })
    

  } catch (error) {
    console.log(error);  

  }

}




 const authTokenUser = (req, res = response) => { //aqui el codigo de acceso para pedir el access token mas abajo

     try {
        axios({
          url:"https://accounts.spotify.com/authorize",
        method: "get",
        params: {
          client_id:'1de72a570fb94a9fa7dbab6d8dd16c24',
          response_type:'code',
          redirect_uri:'http://localhost:4000/'
        },
       /* headers:{
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
       auth: {
        username: client_id,
        password: client_secret
    }*/
 
        }).then( obj => { 
         //  console.log(obj);
        console.log(obj.request.res.responseUrl);
          const url = obj.request.res.responseUrl
           res.redirect(url)
           
        /* res.json({
            ok:true
          })*/
       })
     } catch (error) {
       console.log(error);
     }


 }


 const authTokenUserGet = (req, res = response) => {  //aqui obtengo el acces token 

    try {
       
       axios({
         url: 'https://accounts.spotify.com/api/token',
         method: 'post',
         headers: {
           "Authorization": "Basic MWRlNzJhNTcwZmI5NGE5ZmE3ZGJhYjZkOGRkMTZjMjQ6ZDY2ZWMzNjFkYWQ0NDM5MzliMzFiNDg0ZWY3YWViNzA="
         },
         params: {
          grant_type: "authorization_code",
          code: "AQDTqmjXkpa2SEUovVVagvj03X79Bh92jgm_nxO3GuFoqvj9J2JuI4wNS3pHMwqbzceXae-hh6DTRLU_sxdaMZy754B11lVt5EmjXxeJM_bLYlaAZt_q1JZPHBWCq7zUxFd4dhfErWbEXNqK7hq6oEjMgzvHKe1f9k8",
          redirect_uri: "http://localhost:4000/"
         }


       }).then(obj => {
          console.log(obj);

         res.json({
           ok:true,
        
         })

       })

    } catch (error) {
      console.log(error);
    }



 }


 const authRefreshToken = (req, res = response) => {   //para refrescar el token

     try {
       
      axios({
        url: 'https://accounts.spotify.com/api/token',
        method: 'post',
        headers: {
          "Authorization": "Basic MWRlNzJhNTcwZmI5NGE5ZmE3ZGJhYjZkOGRkMTZjMjQ6ZDY2ZWMzNjFkYWQ0NDM5MzliMzFiNDg0ZWY3YWViNzA="
        },
        params: {
         grant_type: "refresh_token",
         
         refresh_token: 'AQBxMErfjJb37F1Tn3Oh8W7Hiqpjw7ecEPRqK9Tcl9Odw-8T_70h7CsU4Ews8Gf2g5SDngUQ1583SPrQATvNAL0yCwZ9oynKfxOTBCv6UtUseQBAGy9pXpiucv9BEFmLmE4',
         redirect_uri: "http://localhost:4000/"
        }


      }).then(obj => {
         console.log(obj);

        res.json({
          ok:true,
          
       
        })

      })


     } catch (error) {
        console.log(error);
     }

 }



module.exports= {
    authToken,
    authTokenUser,
    authTokenUserGet,
    authRefreshToken
}
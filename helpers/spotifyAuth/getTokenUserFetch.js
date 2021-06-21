const axios = require('axios')



const getTokenUserFetch = async(codigo) => {

    
    try {
       
      const getToken = axios({
          url: 'https://accounts.spotify.com/api/token',
          method: 'post',
          headers: {
            "Authorization": "Basic MWRlNzJhNTcwZmI5NGE5ZmE3ZGJhYjZkOGRkMTZjMjQ6ZDY2ZWMzNjFkYWQ0NDM5MzliMzFiNDg0ZWY3YWViNzA="
          },
          params: {
           grant_type: "authorization_code",
           code: codigo,
           redirect_uri: "https://spotify-searching.herokuapp.com/"
          }
 
 
        }).then(obj => {
         // console.log(obj.data); //retorno el acces token y datos q lo cmplementan
           return obj.data

        })
      return getToken

     } catch (error) {
       console.log(error);
     }

 

}


module.exports = getTokenUserFetch
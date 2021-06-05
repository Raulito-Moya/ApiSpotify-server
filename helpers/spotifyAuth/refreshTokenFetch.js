const axios = require('axios')

const refreshToken = (token) => {
   

    try {
       
      const tokenrefresh = axios({
           url: 'https://accounts.spotify.com/api/token',
           method: 'post',
           headers: {
             "Authorization": "Basic MWRlNzJhNTcwZmI5NGE5ZmE3ZGJhYjZkOGRkMTZjMjQ6ZDY2ZWMzNjFkYWQ0NDM5MzliMzFiNDg0ZWY3YWViNzA="
           },
           params: {
            grant_type: "refresh_token",
            
            refresh_token: token,
            redirect_uri: "http://localhost:4000/"
           }
  
  
         }).then(obj => {
           return obj.data
  
         })
  
        return tokenrefresh
        
       } catch (error) {
          console.log(error);
       }


}


module.exports = refreshToken

const axios = require('axios')


const getUser = async(token) => {

    
    try {
       
      const user = axios({
          url: 'https://api.spotify.com/v1/me',
          method: 'get',
          headers: {
            "Authorization": `"Bearer ${token}"`
          },
         
        }).then(userinfo => {
           return userinfo.data
           
        })
      return user

     } catch (error) {
       console.log(error);
     }

}


module.exports = getUser
const { default: axios } = require("axios")

const client_id = process.env.SPOTIFY_ID
const client_secret = process.env.CLIENT_SECRET


const getTokenWithoutCode = () => {
   
    try {
      
     const token =  axios({
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
            //console.log(data);
            
             return   data.access_token
           
         })
        
      return token
      } catch (error) {
        console.log(error);  
    
      }

}


module.exports = getTokenWithoutCode
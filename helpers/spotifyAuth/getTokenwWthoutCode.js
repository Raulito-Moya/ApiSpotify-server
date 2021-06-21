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
            username: '1de72a570fb94a9fa7dbab6d8dd16c24',
            password: 'd66ec361dad443939b31b484ef7aeb70'
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
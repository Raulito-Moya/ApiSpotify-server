const { response } = require('express')
const axios = require('axios')


const search = (req, res = response) => {

    try {
        
       axios({
           url:'https://api.spotify.com/v1/search',
           method: "get",
           params: {
               q:'Ricardo Arjona',
               type:'album',
               market:'US',
               limit: 5,
               offset: 5
           },
           headers: {
            "Accept": "application/json",
            "Content-Type": "application/json", 
            "Authorization": "Bearer BQAO_dCiMX_RQhqN8beTypaM8F6G2KeFbUypMk0bRNtSTuws_p4QSz4buAp6m9q3z82qFEemM4eC52HqBHk"
           }

       }).then(obj => {
         console.log(obj.data);
           res.json({
               ok:true,
               data: obj.data
               
           })
       })
   

    } catch (error) {
      console.log(error); 
      res.json({
          ok:false
      })  
    }
   
   }





  const searchinUser = (req, res = response) => {  //aqui hago una busqueda con el token del usuario
  
      try {
         
         axios({
             url: 'https://api.spotify.com/v1/me',
             method: 'get',
             headers: {
                "Authorization": "Bearer BQCGDmg1ogObJEdH92Ks-IJWvNEhhtRqFuVHvxKTzd5SB444UC51FAiU9DUnYmnm_SUrFWn0v89jAx8uxoCw4EqmJjFh4ZvPitZI8ifzIWhHAtZwOjW7Xu8eKHDQnrUkIhqhmvlxttkkRnaWYsaJIcR-mzAE2rwkCg"
             }
         }).then(  obj => {
             console.log(obj);
              res.json({
                  obj:obj.data
                })
         })

      } catch (error) {
          console.log(error);
      }
 
  } 




   module.exports = {
       search,
       searchinUser
   }
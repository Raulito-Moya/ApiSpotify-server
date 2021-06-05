


const getToken = async() => {

  const params = new URLSearchParams(window.location.search);
   
  let codigo = params.get('code')
  const url = 'http://localhost:4000/api/auth/usertokenauth' 
    
 
     codigo = { codigo: codigo}  
 
  fetch(url, {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json' 
    }, 
    body:  JSON.stringify(codigo)
   })
   .then( resp =>  resp.json() )
   .then( data => { 

      if(data){
          window.location.assign('http://localhost:3000/login')
        }
       
     })
   .catch( console.log() )

  

}

getToken()
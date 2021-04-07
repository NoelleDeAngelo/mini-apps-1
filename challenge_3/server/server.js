const express= require('express');
const server= express();


server.use(express.static('public'));

server.get('/', (req, res)=>{
  res.render('index.html')
} )



server.listen(3030, ()=> console.log('Listening on 3030'))


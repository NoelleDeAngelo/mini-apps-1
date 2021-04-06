const express = require ('express');
const app = express();
const index = require('../client/index.html');



app.get('/', (req, res)=>{
  res.send(' this is sent')
})

app.listen(3000, ()=> console.log('listening on 3000'));
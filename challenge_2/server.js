const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(express.static('client'))

App.get('/', (req, res)=>{
  res.render('index.html')
})

App.post('/', (req, res)=>{
  console.log('something was posted')
  
})

App.listen(3030,()=>console.log(' App is listening on 3030') )



const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer')
const app= require('./client/app.js')
const upload= multer()
const App = express();

App.use(express.static('client'))



App.get('/', (req, res)=>{
  res.sendFile('index.html')
})

App.post('/', upload.single('file'), (req, res)=>{
  console.log(app)
  app.createCSV(req.body.JSONText)

  res.sendFile('/Users/noelledeangelo/Hack Reactor/week5/hr-sjo5-mini-apps-1/challenge_2/client/index.html')

})


App.listen(3030,()=>console.log(' App is listening on 3030') )



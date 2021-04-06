const express = require ('express');
const app = express();
//const index = require('../views/index.html');

app.use(express.static('public'))
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res)=>{
  res.render('/Users/noelledeangelo/Hack Reactor/week5/hr-sjo5-mini-apps-1/challenge_1/views/index.html')
})

app.listen(3000, ()=> console.log('listening on 3000'));
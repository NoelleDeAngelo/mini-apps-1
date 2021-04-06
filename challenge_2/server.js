const express = require('express');
const bodyParser = require('body-parser');
const App = express();


App.use(express.static('client'))


App.listen(3030,()=>console.log(' App is listening on 3030') )



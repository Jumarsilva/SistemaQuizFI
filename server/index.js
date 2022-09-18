const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./config/routes')

//inicializando o express
const app = express();

//configurando o servidor
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(routes)




//ligando o servidor
app.listen(21262, ()=>{
    console.log('Express started at http://localhost:21262')
})


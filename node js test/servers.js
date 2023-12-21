const express = require('express');
const app = express();
require('./config/connect');
app.use(express.json());


const productrouter = require('./router/products');

app.use('/apiprod',productrouter);

app.listen(3000,()=>{
    console.log('servers is run on port 3000');
});
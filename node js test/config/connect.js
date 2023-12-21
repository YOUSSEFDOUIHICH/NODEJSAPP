const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/datatest')
.then(()=>{
    console.log('data is connected');
})
.catch(()=>{
    console.log('data is not connected');
})
module.exports=mongoose;
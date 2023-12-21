const mongoose = require('mongoose');
const Products = mongoose.model('Products',{
    name:{type:String,},
    description:{type:String,},
    price:{type:Number,}
})
module.exports=Products;
const express = require('express');
const router = express.Router();
const Products = require('../module/products');


router.post('/add',(req,res)=>{
    data = req.body 
    console.log(data);
    pro = new Products(data)
    pro.save()
    .then((savedproducts)=>{res.send(savedproducts)})
    .catch((err)=>{res.send(err)})
});

router.get('/getbyname/:name',(req,res)=>{
    myname = req.params.name
    console.log(myname);
    Products.findOne({name:myname})
    .then((products)=>{res.send(products)})
    .catch((err)=>{res.send(err)})

});
router.put('/update/:id', (req, res) => {
    id = req.params.id
    console.log(id);
    newData = req.body
    Products.findByIdAndUpdate({ _id: id }, newData)
        .then((updated) => {
            res.send(updated)
        })
        .catch((err) => { res.send(err) })
});

router.delete('/deletebyname/:name',(req,res)=>{
    myname = req.params.name
    console.log(myname);
    Products.findByIdAndDelete({name:myname})
    .then((deleteproducts)=>{res.send(deleteproducts)})
    .catch((err)=>{res.send(err)})

});
module.exports=router;


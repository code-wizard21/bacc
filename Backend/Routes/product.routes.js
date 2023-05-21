const express=require('express')
const { productModel } = require('../model/productModel')
const productrouter=express.Router()

productrouter.get('/',async(req,res)=>{
    console.log(req.headers.price,req.headers.place,req.headers.sort)
    try {
        let see=await productModel.find({'location':req.query.location})
        res.send(see)
    } catch (error) {
        console.log(error)
    }
})

productrouter.get('/single',async(req,res)=>{
    try {
        let see=await productModel.find({'id':req.query.id})
        res.send(see)
    } catch (error) {
        console.log(error)
    }
})

module.exports={productrouter}
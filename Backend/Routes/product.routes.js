const express=require('express')
const { productModel } = require('../model/productModel')
const productrouter=express.Router()

productrouter.get('/',async(req,res)=>{
    let price=+req.headers.price
    let destination=req.headers.destination
    let sort=req.headers.sort
    // console.log(price,typeof price)
    try {   
        let see=await productModel.find({'location':destination})
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
const express=require('express')
const { productModel } = require('../model/productModel')
const adminRouter=express.Router()

adminRouter.get('/all',async(req,res)=>{
    try {
        let found=await productModel.find({})
        res.send(found)
    } catch (error) {
        console.log(error)
    }
})

adminRouter.put('/edit',async(req,res)=>{
    try {
        let edit=await productModel.findByIdAndUpdate()
    } catch (error) {
        console.log(error)
    }
})

module.exports={adminRouter}
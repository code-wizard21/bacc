const express=require('express')
const { productModel } = require('../model/productModel')
const { authModel } = require('../model/authModel')
const adminRouter=express.Router()

adminRouter.get('/allProducts',async(req,res)=>{
    try {
        let found=await productModel.find({})
        res.send(found)
    } catch (error) {
        console.log(error)
    }
})

adminRouter.put('/editProduct',async(req,res)=>{
    try {
        let edit=await productModel.findByIdAndUpdate({'_id':req.body._id},req.body)
        res.send(edit)
    } catch (error) {
        console.log(error)
    }
})

adminRouter.post('/addProduct',async(req,res)=>{
    try {
        let count=await productModel.find()
        let insert=await productModel.insertMany({id:count.length+1,...req.body})
        res.send(insert)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

adminRouter.delete('/deleteProduct',async(req,res)=>{
    try {
        await productModel.findByIdAndDelete({'_id':req.headers.id})
        res.send('Deleted Successfully')
    } catch (error) {
        console.log(error)
    }
})

//---------------------for manipulating user's data---------------------------
adminRouter.get('/allUsers',async(req,res)=>{
    try {
        let found=await authModel.find({})
        res.send(found)
    } catch (error) {
        console.log(error)
    }
})

adminRouter.put('/editUser',async(req,res)=>{
    try {
        let edit=await authModel.findByIdAndUpdate({'_id':req.body._id},req.body)
        res.send(edit)
    } catch (error) {
        console.log(error)
    }
})

adminRouter.delete('/deleteUser',async(req,res)=>{
    try {
        await authModel.findByIdAndDelete({'_id':req.headers.id})
        res.send('Deleted Successfully')
    } catch (error) {
        console.log(error)
    }
})



module.exports={adminRouter}
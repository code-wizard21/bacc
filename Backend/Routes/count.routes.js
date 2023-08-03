const mongoose=require('mongoose')

const countSchema=mongoose.Schema({
    count:Number
})

const countModel=mongoose.model('count',countSchema)

const express=require('express')
const countRouter=express.Router()

countRouter.get('/',async(req,res)=>{
    try {
        let found=await countModel.find({})
        console.log(found)
    } catch (error) {
        console.log(error)
    }
})
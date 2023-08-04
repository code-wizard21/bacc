const mongoose=require('mongoose')

const countSchema=mongoose.Schema({
    count:Number
})

const countModel=mongoose.model('countVisitor',countSchema)

const express=require('express')
const countRouter=express.Router()

countRouter.get('/count',async(req,res)=>{
    try {
        let prev=await countModel.findById('64cc957e277f525b711b87af')
        // console.log('prev: ',prev.count)
        let update=await countModel.findByIdAndUpdate({'_id':'64cc957e277f525b711b87af'},{count:++prev.count})
        // console.log('update: ',update.count)
        res.send(update)
    } catch (error) {
        res.send(error)
    }
})

module.exports={countRouter}
const express=require('express')
const { authModel } = require('../model/authModel')
const authrouter=express.Router()

authrouter.get('/',(req,res)=>{
    res.send('auth Home')
})

authrouter.post('/',async(req,res)=>{
    try {
        let figure=await authModel.find({'mobile':req.body.mobile})
        if(figure.length==0)
        {
            await authModel.insertMany(req.body)
            res.send('success')
        }
        else
        {
            res.send('already present')
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports={authrouter}
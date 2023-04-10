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

authrouter.post('/login',async(req,res)=>{
    try {
        let find=await authModel.find({'mobile':req.body.mobile,'password':req.body.password})
        if(find.length==0) res.send('fail')
        else res.send('pass')
    } catch (error) {
        console.log(error)
    }
})

authrouter.post('/email',async(req,res)=>{
    try {
        let find=await authModel.find({'email':req.body.email})
        if(find.length==0) res.send('not available')
        else res.send('present')
    } catch (error) {
        console.log(error)
    }
})

module.exports={authrouter}
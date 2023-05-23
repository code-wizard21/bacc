const mongoose=require('mongoose')

const authSchema=mongoose.Schema({
    mobile:Number,
    email:String,
    password:String,
    isAdmin:Boolean,
})

const authModel=mongoose.model("auth",authSchema)

module.exports={authModel}
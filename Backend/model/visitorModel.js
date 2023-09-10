const mongoose=require('mongoose')
const {Schema}=mongoose

const visitorSchema=new Schema({
    id:Number,
    ipAddress:String,
    browser:String,
    os:String,
    date:String,
    time:String
})

const visitorModel=mongoose.model('visitor',visitorSchema)

module.exports={visitorModel}
const mongoose=require('mongoose')
const {Schema}=mongoose

const visitorSchema=new Schema({
    ipAddress:String,
    hostname:String,
    architechture:String,
    CPUs:Array,
    cores:Number,
    OSversion:String,
    totalmemory:Number,
    freememory:Number,
    date:String,
    time:String
})

const visitorModel=mongoose.model('visitor',visitorSchema)

module.exports={visitorModel}
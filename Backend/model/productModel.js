const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    id:Number,
    name:String,
    location:String,
    place:String,
    image:String,
    amenities:Array,
    price:Number,
    rating:String
})

const productModel=mongoose.model('product',productSchema)

module.exports={productModel}
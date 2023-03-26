const express=require('express')
const app=express()
require('dotenv').config()
const cors=require('cors')
const mongoose=require('mongoose')
const { authrouter } = require('./Routes/auth.routes')
const { productrouter } = require('./Routes/product.routes')

app.use(express.json())
app.use(cors())
app.use('/authentication',authrouter)
app.use('/products',productrouter)

app.listen(process.env.port,()=>{
    mongoose.connect(process.env.mongo)
    .then(()=>console.log('Connected to DB'))
    .catch(()=>console.log('DB connection Failed'))
    console.log(`Server is running at port ${process.env.port}`)
})
const express = require('express')
const cors=require('cors')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const router = require('./routes')
require('./config/connectDB')
app.use(express.json())
app.use(cors(
    {
        origin: ["https://mern-front-one.vercel.app"],
        method:["GET","POST"],
        credentials:true
    }
))
app.use(router)

app.listen(port,()=>
{
    console.log(`server is running at ${port}`)
})

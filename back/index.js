const express = require('express')
const cors=require('cors')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const router = require('./routes')
require('./config/connectDB')
app.use(express.json())
app.use(cors(
    ["http://localhost:3000"]
))
app.use(router)

app.listen(port,()=>
{
    console.log(`server is running at ${port}`)
})
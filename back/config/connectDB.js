const mongoose = require('mongoose')
require('dotenv').config();
const CONN_STR = process.env.DB_LOC
const schema = require('./schema')
const connect_db = async ()=>
{
    try
    {
        const conn = await mongoose.connect(CONN_STR,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log(`Db connected : ${conn.connection.host} at ${conn.connection.name}`)
    }
    catch(err)
    {
        console.log("Something is Going wrong")
        console.log(err)
    }
    
}
connect_db()

module.exports = connect_db
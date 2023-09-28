const express = require('express')
const schema = require('./config/schema')
const router = express.Router();
const asyncHandler = require('express-async-handler')



const validate = asyncHandler( async (req,res)=>
{
    const {uname,pwd} = await req.body
    const data = await schema.find({uname})

   try
   {
    if(pwd==data[0].pwd)
    {
        console.log("Logged in")
    }
    else
    {
        console.log("Sorry ")
        res.sendStatus(401)
    }
    res.sendStatus(202)
   }
   catch
   {
    console.log("User Not Exist")
    res.sendStatus(401)
   }
    

}
)

const insert = asyncHandler(
    async (req,res)=>
    {
        
        if(!req.body.uname||!req.body.pwd)
        {
            res.status(400).json({error:"FNF"})
        }
        else
        {
            const {fname,lname,email,uname,pwd} = await req.body
            const data = await schema.create({fname,lname,email,uname,pwd})
            console.log(data)

            res.status(201).json(data)
        }
        
    }
)
router.route('/login').post(validate)
router.route('/register').post(insert)

module.exports = router
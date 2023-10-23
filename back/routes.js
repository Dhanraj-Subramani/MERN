const express = require('express')
const schema = require('./config/schema')
const router = express.Router();
const asyncHandler = require('express-async-handler')


let reg = false;
const validate = asyncHandler(async (req, res) => {
    const { uname, pwd } = await req.body
    const data = await schema.findOne({ uname })
    if(!data)
    {
        console.log("invalid POST request !");
    } 
    data.path= "dashboard"

    try {
        if (pwd == data.pwd) {
            console.log("Logged in")
            res.status(200).send(data)
        }
        else {
            console.log("Sorry ")
            res.sendStatus(401)
        }
        // const file = {...data,path:"dashboard"}
        
    }
    catch
    {
        console.log("User Not Exist")
        res.sendStatus(401)
    }


}
)

const insert = asyncHandler(
    async (req, res) => {

        

        if (!req.body.uname || !req.body.pwd) {
            res.status(400).json({ error: "FNF" })
        }
        else {
            const { fname, lname, email, uname, pwd } = req.body; // Assuming req.body is a JSON object
            try {
                const data = await schema.create({ fname, lname, email, uname, pwd });
                if(!data)
                {
                    throw new error
                }
                console.log("Data Stored Successfully !");
                console.log(data);
                reg = true;
                const url = '/registration-complete'
                res.status(201).send(url);
            } catch (e) {
                console.error(e);
                res.send('/registration-fail');
            }

        }

    }
)

router.route('/login').post(validate)
router.route('/register').post(insert)

module.exports = router
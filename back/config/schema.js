const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
{
    fname:
    {
        type:String,
        require:true
    },
    lname:
    {
        type:String,
        require:true
    },
    email:
    {
        type:String,
        require:true,
        unique:true
    },
    uname:
    {
        type:String,
        require:true,
        unique:true
    },
    pwd:
    {
        type:String,
        require:true

    },
    path:
    {
        type:String
    }
}
);
module.exports = mongoose.model('credentials',userSchema);
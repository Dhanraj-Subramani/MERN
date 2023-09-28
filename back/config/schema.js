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
        require:true
    },
    uname:
    {
        type:String,
        require:true
    },
    pwd:
    {
        type:String,
        require:true

    }
}
);
module.exports = mongoose.model('cred',userSchema);
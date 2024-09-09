import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Enter a name"]
    },
    email:{
        type:String,
        required:[true,"Enter a email"]
    },
    password:{
        type:String,
        required:[true,"Enter a pasword"]
    }
})
const User=mongoose.model('User',userSchema)
export default User
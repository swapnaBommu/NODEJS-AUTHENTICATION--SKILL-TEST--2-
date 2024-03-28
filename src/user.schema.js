import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"],
        maxLength:[50,"your name can not exceed 50 characters"]
    },
    email:{
        type:String,
        required:[true,"please enter your email"],
         unique:true
    },
    password:{
        type:String,
        required:[true,"please enter your password"],
        minLength:[5,"your password must be longer than 5 characters"],
        select:false //don't send password in the response
    },
    restPasswordToken:String,
    restPasswordExpire:Date,
},
{timestamps:true}
);

export default mongoose.model("User",userSchema);
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
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
//Encrypting password before saving the user
userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
})



export default mongoose.model("User",userSchema);
import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";
import { ApplicationError } from "./applicationError.js";

//creating model from schema
const userModel = mongoose.model('User',userSchema);

export default class UserRepository{
    async singup(user){
        try{
            //create instance of model
            const newUser = new userModel(user);
            await newUser.save();
            return newUser;
        }catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database",500);
        }
    }
    async signin(email,password){
        try{
            return await userModel.findOne({email,password});
        }catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database",500);
        }
    }
    async findByEmail(email){
        try{
            return await userModel.findOne({email});
        }catch(err){
            console.log(err);
        }
    }
}
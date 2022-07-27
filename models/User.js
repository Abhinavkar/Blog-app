import mongoose from "mongoose";
const Schema =mongoose.Schema;
const userSchema= new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:6
    },
    blogs:[{type:mongoose.Types.objectid,ref:"blog",required:true}],
});
export default mongoose.models("Users",userSchema())
import mongoose from 'mongoose';

const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    blogs:[
        {type:mongoose.Types.ObjectId,ref:"Blog",required:true}]
});

export default mongoose.model("User",userSchema);
// users: The collection of the model or a particular entity type gets stored in mongoDB as a lowercase even 
// the first character of entity is in uppercase and in the plural form like users
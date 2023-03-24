const {Schema, model}=require('mongoose');

const UserSchema= new Schema({
    name:{type:String, min: 3},
    username: String ,
    email: String,
    password: String, // Never do this
    mobile: Number,
    country: String,
    gender:{
        type:"String",
        enum:["male","Female","Unspecified"]
    }
})

const User=model("User",UserSchema)

module.exports={
    User
}
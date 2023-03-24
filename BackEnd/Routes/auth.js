const {Router}=require('express');
const { User } = require('../Models/User');

const authRouter=Router();

authRouter.post("/signup",async(req,res)=>{
    console.log(req.body,"req body")
    try {
        const user=await new User(req.body);
        user.save();
        return res.status(201).send({message:"SignUp Success", token:12345})
    } catch (error) {
        return res.status(500).send({message:"Error Occured"});  
    }
     
})

authRouter.post("/login",async(req,res)=>{
    const {username,password}=req.body;
    const ValidUser=await User.find({username,password});//[]
    return res.send(ValidUser);
})

module.exports={authRouter}

const {Router}=require("express");
const { User } = require("../Models/User");

const userRouter=Router();

userRouter.get("/:userId",async(req,res)=>{
    console.log("hi2")
    const userId=req.params.userId;
    console.log(userId,"usrId")
    const user=await User.findById(userId);
    res.send(user)
})

userRouter.post("/:userId/feed",async(req,res)=>{
    const {title}=req.body;
})

module.exports={
    userRouter
}
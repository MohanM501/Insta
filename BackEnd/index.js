const express=require("express");
const { authRouter } = require("./Routes/auth");

const app=express();

app.use(express.urlencoded({extended :true}));
app.use(express.json());

app.use("/auth",authRouter)


app.listen(8080, ()=>{
    console.log("listening on port 8080")
})
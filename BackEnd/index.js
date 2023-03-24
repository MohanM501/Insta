const express=require("express");
const { connection } = require("./Configue/db");
const { authRouter } = require("./Routes/auth");
const { userRouter } = require("./Routes/SingleUser");
const cors=require("cors")

const app=express();

app.use(express.urlencoded({extended :true}));
app.use(express.json());
app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("hi weolco")
})
app.use("/auth",authRouter);
app.use("/profile",userRouter)


app.listen(8080, async()=>{
    try {
        await connection;
        console.log("Connected to DB succesffuly")
    } catch (error) {
        console.log(error);
        console.log("Failed to connect DB")
    }
    console.log("listening on port 8080")
})
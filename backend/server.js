const express=require("express");
const dbConnect = require("./db");
const authRouter = require("./routes/auth");
const app=express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/",authRouter);

app.get("/get",(req,res)=>{
    res.json("Hello world!");
})

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server started");
    dbConnect();
});
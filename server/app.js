const dotenv=require("dotenv");
const express=require("express");
const mongoose=require("mongoose");
const app=express();

dotenv.config({path:'./config.env'});

const DB=process.env.DATABASE
const PORT=process.env.PORT;

mongoose.connect(DB,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connection Successful")
}).catch((err)=>console.log(err))

const middleware=(req,res,next)=>{
    console.log("Hello My MiddleWare");
    next();
}

app.get('/',(req,res)=>{
    res.send("Hello MERN");
})
app.get('/about',middleware,(req,res)=>{
    res.send("Hello About MERN");
})
app.get('/contact',(req,res)=>{
    res.send("Hello Contact MERN");
})
app.get('/signin',(req,res)=>{
    res.send("Hello SignIn MERN");
})
app.get('/signup',(req,res)=>{
    res.send("Hello SignUp MERN");
})

app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)});
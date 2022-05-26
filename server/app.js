const express=require("express");
const mongoose=require("mongoose");
const app=express();

mongoose.connect("mongodb+srv://admin:admin@cluster0.9mv8a.mongodb.net/mern?retryWrites=true&w=majority",{
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

app.listen(3000,()=>{console.log("Server running on port 3000")});
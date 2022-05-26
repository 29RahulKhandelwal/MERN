const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello MERN");
})
app.get('/about',(req,res)=>{
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

app.listen(3000,()=>{console.log("Function running on port 3000")});
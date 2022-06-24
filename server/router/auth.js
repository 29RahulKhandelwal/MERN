const jwt=require("jsonwebtoken");
const express=require("express");
const bcrypt=require("bcryptjs");
const router=express.Router();

require("../db/connection");
const User=require("../model/userSchema");

router.get('/',(req,res)=>{
    res.send("Hello MERN Router");
})
router.post('/signup',async (req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Please fill all the fields"})
    }
    try{
        const userExist=await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({error:"Email already exist."})
        }else if(password != cpassword){
            return res.status(422).json({error:"passwords are not matching."})
        }else{
            const user=new User({name:name,email:email,phone:phone,work:work,password:password,cpassword:cpassword})
    
            await user.save();
            res.status(201).json({success:"user registered successfully"})
        }
    }
    catch(err){console.log(err)}
})

router.post("/signin",async (req,res)=>{
    // res.json({message:"successfully logged in"})
    try{
        let token;
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error:"Please fill all the credentials"})
        }

        const userLogin=await User.findOne({email:email})

        if(userLogin){
            const isMatch=await bcrypt.compare(password,userLogin.password)
            
            token=await userLogin.generateAuthToken()
            
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+2589200000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({error:"invalid credentials"})
            }else{
                res.json({message:"user signin successful"})
            }
        }else{
            res.status(400).json({error:"Inavlid credentials"})
        }


    } catch(err){
        console.log(err);
    }
})

module.exports=router;
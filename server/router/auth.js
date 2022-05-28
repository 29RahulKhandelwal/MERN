const express=require("express");
const router=express.Router();

require("../db/connection");
const User=require("../model/userSchema");

router.get('/',(req,res)=>{
    res.send("Hello MERN Router");
})
router.post('/signin',async (req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Please fill all the fields"})
    }
    try{
        const userExist=await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({error:"Email already exist."})
        }
        const user=new User({name:name,email:email,phone:phone,work:work,password:password,cpassword:cpassword})
        await user.save();
        res.status(201).json({success:"user registered successfully"})
    }
    catch(err){console.log(err)}
})

module.exports=router;
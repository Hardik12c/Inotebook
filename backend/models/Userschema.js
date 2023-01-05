const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');


const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Provide your name'],
        trim:true,
        minLength:3,
        maxLength:25
    },
    email:{
        type:String,
        required:[true,'Please Provide your email'],
        unique:true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Please provide valid email']
    },
    password:{
        type:String,
        required:[true,'Please provide the password'],
    },
    Date:{
        type: Date,
        default: Date.now
    }
})
userschema.pre('save',async function() {
    const salt= await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})
module.exports=mongoose.model('User',userschema);
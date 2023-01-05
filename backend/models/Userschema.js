const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Provide your name'],
        trim:true,
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
module.exports=mongoose.model('User',userschema);
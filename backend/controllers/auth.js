const Userschema=require('../models/Userschema');
const {StatusCodes}=require('http-status-codes');


const register=async(req,res)=>{
    const user=await Userschema.create({...req.body})
    res.status(StatusCodes.OK).json({user});
}


module.exports={register};
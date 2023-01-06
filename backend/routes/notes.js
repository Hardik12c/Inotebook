const express=require('express');
const { getallnotes, createnote } = require('../controllers/notes');

const router=express.Router();

router.route('/').get(getallnotes).post(createnote); 

module.exports=router;
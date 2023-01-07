const express=require('express');
const { getallnotes, createnote, updatenote, deletenote } = require('../controllers/notes');

const router=express.Router();

router.route('/').get(getallnotes).post(createnote); 
router.route('/:id').patch(updatenote).delete(deletenote);
module.exports=router;
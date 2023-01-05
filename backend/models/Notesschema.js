const mongoose=require('mongoose');

const Notesschema=mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please Provide the Title']
    },
    description:{
        type:String,
        required:[true,'Please Provide the description']
    },
    tag: {
        type: String,
        enum: ['General', 'Exclusive', 'Fun','Personal'],
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports=mongoose.model('Notes',Notesschema);
const mongoose = require('mongoose')

const choreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    importance:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('chore', choreSchema)
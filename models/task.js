const mongoose = require('mongoose')

const taskschema = new mongoose.Schema({
    name: {
       type: String,
       required: [true,'you must  enter value'],
       trim: true,
       maxlength:[20,'more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Task',taskschema)
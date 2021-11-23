const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
    trim: true
},

email: {
    type: String,
    required: true,
    unique: true,
    trim: true
    // change trim => unique:true
},

password: {
    type: String,
    unique: true
},

role:{
    type: Number,
    default: 0,
    // required: true
},

cart:{
    type: Array,
    default: []
}, 
    // timestamp: true

})

module.exports = mongoose.model('Users', userSchema)
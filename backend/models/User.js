const mongoose = require("mongoose");


//Designing the Ueer Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamp: true
});

const User=mongoose.model("User",userSchema);

module.exports=User;

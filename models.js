//models.js defines a collection schema for our app

const mongoose = require('mongoose');

//Create UserSchema using mongoose.Schema() method
//schema collects name and age fields from the request
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 0,
    },
});

//Export the schema
const User = mongoose.model("User", UserSchema);
module.exports = User;
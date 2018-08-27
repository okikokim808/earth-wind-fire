const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema ({
    userName: String,
    password: String
})


const User = mongoose.model('User', userSchema);

module.exports = User;
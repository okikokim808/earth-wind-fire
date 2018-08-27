


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hubs-api/");



    module.exports.User = require('./models/user.js')



const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hubs-api/",
{useMongoClient: true});



    module.exports.User = require('./user')
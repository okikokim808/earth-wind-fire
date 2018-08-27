
const express = require('express');
const app = express();



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



const db = require('./models');


app.use(express.static('public'));




app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});




app.get('/api/hubs', (req, res) => {
    db.User.find({ }, (err, user) => {
        if(err) {
            return console.log(err)
        }

        res.json(user)
    
})

});















app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});

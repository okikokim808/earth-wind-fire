
app.get('/api/hubs', (req, res) => {
    db.User.find({}, (err, user) => {
        if(err) {
            return console.log(err)
        }

        res.json(user)
    })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});

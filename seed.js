
const db = require('./models')


const userData = [

    {
    name: 'Church',
    location: 'San Francisco',

}

]






db.User.create(userData, (err, user) => {
    if (err) {
        return console.log(err)
    }

    console.log(user);
})



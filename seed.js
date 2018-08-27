
const db = require('./models')


const userData = [{
    userName: 'Church',
    password: 'San Francisco'

}
]



console.log('SD:LFIJSFIOJEWPOIFHJPOIWEHJFPOWIEHJFO{QIWJDJDFHHHE##!#!@#!@@!#')



db.User.create(userData, (err, user) => {
    if (err) {
        return console.log(err)
    }

    console.log(userData[0]);
})



db.User.find({ }, (err, userList) => {
    if (err) {
        return console.log(err)
    }

    console.log("******USER LIST*******", userList)
})



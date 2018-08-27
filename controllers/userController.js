let db = require("../models");

// GET /api/users

const getUsers = (req, res) => {
    db.User.find({}, (err, users) => {
        if (err) {
            console.log(err);
            return err;
        }
        res.json(users);
    });
};

module.exports = {
    get: getUsers,
}
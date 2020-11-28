const User = require('../models/user');

exports.getAllUsers = (req, res, next)=>{
    User.find()
    .then(users=>{
        res.json({
            status: true,
            message: "All Users Retrieved Successfully",
            data: users,
        })
    })
    .catch(err=>{
        res.status(400).json('Error: ' + err)
    })
};


exports.addNewUser = (req, res, next)=>{
    const username = req.body.username;
    console.log(username)
    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: ' + err));
}
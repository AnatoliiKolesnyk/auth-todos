const jwt = require("jwt-simple");
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = Date.now();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.getSecret());
}

function isEmail(email) {
    const rgxp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return rgxp.test(email);
}

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: "You must provide email and password" });
    }

    if (!isEmail(email)) {
        return res.status(422).send({ error: "You must provide correct email" });
    }

    // See if user with given email exists:
    User.findOne({ email }, (err, existingUser) => {
        if (err) {
            return next(err);
        }

        // If user exists - error:
        if (existingUser) {
            return res.status(422).send({ error: "Email is in use" });
        }
        // If user doesn't exist - create and save user record
        const user = new User({ email, password });

        user.save(err => {
            if (err) {
                return next(err);
            }

            // Respond to request indicatingthe user was created
            res.json({ token: tokenForUser(user) });
        })
    });
};

exports.signin = function(req, res, next) {
    // User has already had their email and password quth'd
    // We just need to give him a tokenForUser
    // req.user - signed in user
    res.send({ token: tokenForUser(req.user) });
};

const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local Strategy
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    // Verify this email and password
    // Call 'done' with the user if correct
    // Otherwise call 'done' with false
    User.findOne({ email }, (err, user) => {
        if (err) {
            return done(err, false);
        }
        if (!user) {
            return done(null ,false);
        }

        // compare passwords - is 'password' === user.password ?
        user.comparePasswords(password, (err, isMatch) => {
            if (err) {
                return done(err);
            }

            return done(null, isMatch ? user : false); // user will be available via req.user
        });
    });
});

// Set up options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorithation"),
    secretOrKey: config.getSecret()
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    // See if user ID in the payload exists in our DB
    // If it does, call 'done' with that user
    // Otherwise, call 'done' without a user object
    User.findById(payload.sub, (err, user) => {
        if (err) {
            return done(err, false);
        }

        done(null, user || false);
    })
});

// Tell passport to use this strategies:
passport.use(jwtLogin);
passport.use(localLogin);

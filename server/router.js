const fs = require('fs');
const path = require('path');
const passport = require('passport');
const Authentication = require('./middlewares/authentication');
const passportService = require('./services/passport');
const apiController = require("./controllers/apiController");
const setupController = require("./controllers/setupController");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
    app.post("/api/signup", Authentication.signup);
    app.post("/api/signin", requireSignin, Authentication.signin);

    apiController(app, requireAuth);
    setupController(app, requireAuth);

    app.get("/*", (req, res) => {
        res.redirect("/");
    });
};

const config = require("./config");

module.exports = {
    // mode -> dev, test, prod...
    getDbConnectionString(mode) {
        return config.dbConnectionString;
    },

    getSecret() {
        return config.secret;
    }
};

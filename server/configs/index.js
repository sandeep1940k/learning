const CONFIG = require('./dev.config');
require('./db.config.js')(CONFIG);

module.exports = CONFIG;
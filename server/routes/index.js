const express = require('express');
const router = express.Router();

/** ----- Authentication Routes ----- */
router.use('/authentication', require("./authentication.route.js"));

module.exports = router;
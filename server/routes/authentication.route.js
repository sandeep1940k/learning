const express = require('express');
const router = express.Router();
const authenticationController = require("../controllers/authentication.controller")

/** ----- Signup ----- */
router.post('/signup', authenticationController.signup);

module.exports = router;
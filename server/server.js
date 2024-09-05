/** ----- Global Imports ----- */
global.CONFIG = require('./configs')

/** ----- Libraries ----- */
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser'); // Fix the typo here

const PORT = CONFIG.SERVER_PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true })); // Use bodyParser here
app.use(bodyParser.json()); // Also, add this line to parse JSON bodies

/** ----- Use the routes defined in the routes file for all /api endpoints ----- */
app.use('/api', require('./routes'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
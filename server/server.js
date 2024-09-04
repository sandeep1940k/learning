/** ----- Global Imports ----- */
global.CONFIG = require('./configs')

/** ----- Libraries ----- */
const cors = require('cors');
const express = require('express');

const PORT = CONFIG.SERVER_PORT || 5000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ limit: '100mb', extended: true }));

/** ----- Use the routes defined in the routes file for all /api endpoints ----- */
// app.use('/api', require('./routes'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
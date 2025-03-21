const express = require('express');
const routes = require('./routes/index'); // Ensure all routes are imported here
const app = express();

app.use(express.json());

// Mount the main router
app.use('/api', routes);

module.exports = app;
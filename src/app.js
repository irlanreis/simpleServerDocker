const express = require('express');
const userRoutes = require('./routes/userRoutes.js');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

module.exports = app;

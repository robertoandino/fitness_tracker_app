const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());

//routes
const workoutRoutes = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/workouts', workoutRoutes);
app.use('/api/users', userRoutes);

module.exports = app;



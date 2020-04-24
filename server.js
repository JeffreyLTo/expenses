const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')

// Initialize express app
const app = express();

// Initialize body-parser 
app.use(express.json());

// Route dotenv to global config file
dotenv.config({ path: './config/config.env' });

//Try connecting to database
connectDB();

// Require expenses router file
const expenses = require('./routes/expenses');

app.use('/api/v1/expenses', expenses)

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Starting as ${process.env.NODE_ENV} mode on port ${PORT}`));


const express = require('express');
const router = express.Router();
const {getExpenses, addExpense, deleteExpense} = require('../controllers/expense-ctrl')


//Route getExpenses and addExpenses method to '/' path
router
    .route('/')
    .get(getExpenses)
    .post(addExpense);

// Route deleteExpense method to use expense unique ID 
router
    .route('/:id')
    .delete(deleteExpense);

// Export the router for use
module.exports = router;
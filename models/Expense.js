const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please enter a name"]
    },

    cost: {
        type: Number,
        required: [true, "Please enter the cost"]
    },

    type: {
        type: String,
        trim: true,
        required: [true, "Please enter a type"]
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
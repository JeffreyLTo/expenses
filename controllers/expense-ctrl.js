const Expense = require('../models/Expense')


// @desc Get all expenses, async function, await finish.
// @route GET /api/v1/expenses
// @access public
exports.getExpenses = async (req, res, next) => {
    try{
        const expenses = await Expense.find();
        
        // On Success, return json object with amount of items and the payload from db
        return res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        });
    }catch (err) {
        // On Failure, set 500 server error
        return res.status(500).json({
            success: false,
            error: "Error 500: Server Error"
        });
    }
}

// @desc add a new expense
// @route POST /api/v1/expenses
// @access public
exports.addExpense = async (req, res, next) => {
    // Destructure incoming data
    const { name, cost, type } = req.body;

    try{
        const expense = await Expense.create(req.body);

    //On success
    return res.status(201).json({
        sucess: true,
        data: expense
    });
    }
    catch (err) {
        // On Failure, set 500 server error
        return res.status(400).json({
            success: false,
            error: "Error 400: Client Error"
        });
    }

    
}

// @desc delete an expense
// @route POST api/v1/expenses/:id
// @access public
exports.deleteExpense = async (req, res, next) => {
    
    try{
        const expense = await Expense.findById(req.params.id);
        
        // If couldnt find the expense
        if(!expense) {
            return res.status(404).json({
                sucess: false,
                error: "Error 404, no expense found"
            });
        }

        // Otherwise, remove the expense
        await expense.remove();
        return res.status(200).json({
            success: true,
            data: {}
        });
    }
    catch (err) {
        // On Failure, set 500 server error
        return res.status(500).json({
            success: false,
            error: "Error 500: Server Error"
        });
    }
}
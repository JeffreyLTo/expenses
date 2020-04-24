const Expense = require('../models/Expense.js')

createExpense = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No Expense Data',

        })
    }

    const expense = new Expense(body)

    if(!expense) {
        return res.status(400).json({ success: false, error: err})
    }

    expense 
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: expense._id,
                message: 'Created Expense'
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "Did not create expense"
            })
        })

}

deleteMovie = async (req, res) => {
    await Expense.findOneAndDelete({_id: req.params.id}, (err, expense) => {
        if (err) {
            return res.status(400).json({ success: false, error: err})
        }

        if (!expense) {
            return res
                .status(404)
                .json({ success: false, error:"Expense Not Found"})
        }

        return res.status(200).json({success: true, data: expense})
    }).catch(err => console.log(err))
}

getExpenses = async (req, res) => {
    await Expense.find({}, (err, expenses) => {
        if(err) {
            return res.status(400).json({sucess: false, error: err})
        }
        if(!expenses.length) {
            return res
                .status(404)
                .json({sucess: false, error: "Expense not found"})
        }
        return res.status(200).json({sucess: true, data: expenses})
    })
}

module.exports = {
    createExpense,
    deleteExpense,
    getExpenses,
}
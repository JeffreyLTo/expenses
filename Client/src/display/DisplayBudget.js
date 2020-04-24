import React, { Component } from 'react';
import BalanceDisplay from './BalanceDisplay'
import ExpenseList from './ExpenseList'

// Main entry point for all the budget related content. This is what called balance display and expense list
const DisplayBudget = () => {

    // Returns the css bootstrap card body containing running total and list of expenses
    return(
        <div className="card card-body">
            <h3 className= "text-center">Your Budget Info</h3>
            <BalanceDisplay />
            <ExpenseList />

        </div>
    )
}

export default DisplayBudget
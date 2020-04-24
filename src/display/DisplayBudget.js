import React, { Component } from 'react';
import BalanceDisplay from './BalanceDisplay'

const DisplayBudget = () => {
    return(
        <div className="card card-body">
            <h3 className= "text-center">Your Budget Info</h3>
            <BalanceDisplay />
            <h2>Expenses List</h2>

        </div>
    )
}

export default DisplayBudget
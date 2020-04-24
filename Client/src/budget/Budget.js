import React, { Component } from 'react';
import InputExpense from './InputExpense'
import DisplayBudget from '../display/DisplayBudget';


// Return what will be rendered by React when budget is called
const Budget = () => {
    return (

        // Put everything in a bootsrap css grid
        <div className="row">
            <div className="col-lg-4">
                <InputExpense />
            </div>

            <div className="col-lg-8">
                <DisplayBudget />
                
            </div>
        </div>
            
    )
}

export default Budget
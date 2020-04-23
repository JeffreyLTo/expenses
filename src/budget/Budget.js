import React, { Component } from 'react';
import InputBudget from './InputBudget'
import InputExpense from './InputExpense'
import DisplayBudget from '../display/DisplayBudget';

const Budget = () => {
    return (
        <div className="row">
            <div classname="col-lg-4">
                <InputBudget />
                <InputExpense />
            </div>

            <div classname="col-lg-8">
                <DisplayBudget />
            </div>
        </div>
            
    )
}

export default Budget
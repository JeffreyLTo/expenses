import React, { Component } from 'react'
import { BudgetConsumer } from '../Values'

class ExpenseList extends Component {
    render() {
        return(
            <div className="card mt-5">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <BudgetConsumer>
                        {value => {
                            const expensesList = value.expenses.length > 0? (
                                value.expenses.map(expenses => {
                                    return (
                                         <tr>
                                            <td>{expenses.name}</td>
                                            <td>{expenses.cost}</td>
                                            <td>{expenses.type}</td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td>Your Expenses Will Appear Here</td>
                                </tr>
                            )
                            return <tbody>{expensesList}</tbody>
                        }}
                    </BudgetConsumer>
                </table>

            </div>
        )
    }
}

export default ExpenseList
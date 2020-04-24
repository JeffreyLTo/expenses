import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../States/GlobalState'

// Define what will be rendered by React when ExpenseList is called
export const ExpenseList = () =>  {

    // Define const to hold what we need from the global state
    const {expenses} = useContext(GlobalContext);
    const {deleteExpense, getExpenses} = useContext(GlobalContext);

    // Import useEffect hook to handle asynchronous call of getExpenses
    useEffect(() => {
        getExpenses();
    }, [])

        // Returns a bootstrap table
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
                    {/* For table body, will iterate through global expenses and pull all the values
                        and format into table. Will also insert a delete button
                    */}
                    <tbody>
                        {expenses.map(expense => (
                            <tr>
                                <td><button className="del btn.sm btn-danger" onClick={() => deleteExpense(expense._id)}>x</button>{expense.name}</td>
                                <td>{expense.cost}</td>
                                <td>{expense.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )
    
}

export default ExpenseList
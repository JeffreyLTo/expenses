import React, { useContext } from 'react'
import { GlobalContext } from '../States/GlobalState'


export const ExpenseList = () =>  {

    const {expenses} = useContext(GlobalContext);
    const {deleteExpense} = useContext(GlobalContext);


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
                    <tbody>
                        {expenses.map(expense => (
                            <tr>
                                <td><button className="del btn.sm btn-danger" onClick={() => deleteExpense(expense.id)}>x</button>{expense.name}</td>
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
import React, { useContext} from 'react';
import { GlobalContext } from '../States/GlobalState'


// Define what will be rendered by react when Balance Display is called
const BalanceDisplay = () => {

    // define what will be needed from the global state
    const {expenses} = useContext(GlobalContext);
    const amounts = expenses.map(expense => expense.cost);

    // Define total amount for expenses, display to two decimal points
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); 

    // Return bootstrap card containing running total of expenses
    return(
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header text-center">Total Expenses</div>
                    <div className="card-body">
    <h5 className="text-center card-title">$ {total}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BalanceDisplay
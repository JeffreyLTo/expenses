import React, { useContext} from 'react';
import { GlobalContext } from '../States/GlobalState'

const BalanceDisplay = () => {

    const {expenses} = useContext(GlobalContext);
    const amounts = expenses.map(expense => expense.cost);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); 

    return(
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header text-center">Total Expenses</div>
                    <div className="card-body">
    <h5 className="text-center card-title">{total}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BalanceDisplay
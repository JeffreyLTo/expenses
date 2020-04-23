import React, {useState} from 'react'

export const AddExpense = () => {
    /* Create hooks for all the values*/
    const[name, setName] = useState('');
    const[cost, setCost] = useState(0);
    const[cat, setCat]  = useState('');
    return (
        <div>
            <h3>Add Expense</h3>
            <form>
                <div className="form-section">
                    <input type="text" value={name} onChange ={(event) => setName(event.target.value)} placeholder="Name of expense..."></input>
                </div>
                <div className="form-section">
                    <input type="number" value={cost} onChange ={(event) => setCost(event.target.value)} placeholder="Cost of expense..."></input>
                </div>
                <div className="form-section">
                    <input type="text" value={cat} onChange ={(event) => setCat(event.target.value)} placeholder="Type of expense..."></input>
                </div>
                <button className="button">Add New Expense</button>
            </form>
        </div>
    )
}

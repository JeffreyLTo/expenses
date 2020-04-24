import React, { useState, useContext } from 'react'
import { GlobalContext } from '../States/GlobalState'


// Define what will be rendered by React when InputExpense is called
export const InputExpense = () => {

    // Create variable to hold global access to state
    const { addExpense } = useContext(GlobalContext);

       // Create hooks for the input parameters
        const [name, setName] = useState('');
        const [cost, setCost] = useState(0);
        const [type, setType] = useState('');
    

    // Function to handle event from form submit 
    const onSubmit = (e) => {
        e.preventDefault()

        //Create new expense object
        const newExpense = {
            id:  Math.floor(Math.random() * 10000000),
            name,
            cost: +cost,
            type
        }

        // Call addExpense method to pass up newly created expense
        addExpense(newExpense);
        
    }
        // Return a bootstrap card containing a form for user to enter a new expense
        return(
            <div className="card h-100 card-body">
                <form onSubmit={onSubmit}>
                    <label>Expense</label>
                    <input className="form-control" value = {name} onChange={(e) => setName(e.target.value)}name="name"></input>
                    <label>Cost</label>
                    <input className="form-control" value = {cost} onChange={(e) => setCost(e.target.value)} name="cost"></input>
                    <label>Type</label>
                    <input className="form-control" value = {type} onChange={(e) => setType(e.target.value)}name="type"></input>
                    <button className="btn btn-block btn-success mt-3">Submit</button>

                </form>
            </div>
        )
}

export default InputExpense
import React, { Component } from 'react'

class InputExpense extends Component {
    render() {
        return(
            <div className="card card-body">
                <form>
                    <label>Expense</label>
                    <input className="form-control" name="Name of Expense"></input>
                    <label>Cost</label>
                    <input className="form-control" name="Cost of Expense"></input>
                    <label>Type</label>
                    <input className="form-control" name="Type of Expense"></input>
                    <button className="btn btn-block btn-success mt-3">Submit</button>

                </form>
            </div>
        )
    }
}

export default InputExpense
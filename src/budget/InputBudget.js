import React, { Component } from 'react';

class InputBudget extends Component {
    render() {
        return(
            <div className="card card-body mb-3">
                <label>Set your budget</label>
                <form className="form-inline">
                    <input className="form-control mr-2" type="number"></input>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}

export default InputBudget
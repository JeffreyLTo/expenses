import React, { Component } from 'react';

const BalanceDisplay = () => {
    return(
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Expenses</div>
                    <div className="card-body">
                        <h5 className="text-center card-title">102</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Remaining</div>
                    <div className="card-body">
                        <h5 className="text-center card-title">102</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Budget</div>
                    <div className="card-body">
                        <h5 className="text-center card-title">102</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BalanceDisplay
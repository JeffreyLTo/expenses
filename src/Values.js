import React, { Component } from 'react';

const BudgetContext = React.createContext();

class BudgetProvider extends Component {

    state = {
        budget: 102,
        expenses: [
        {name: 'fun', cost: 500, type: 'test'},
        {name: 'fun', cost: 500, type: 'test'},
        {name: 'fun', cost: 500, type: 'test'},
        {name: 'fun', cost: 500, type: 'test'},
        ]
    }

    render() {

        

        return(
            <BudgetContext.Provider value = {this.state}>
                {this.props.children}
            </BudgetContext.Provider>
        )
    }
}

const BudgetConsumer = BudgetContext.Consumer;

export { BudgetProvider, BudgetConsumer }
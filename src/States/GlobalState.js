import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Need to create an initial state for app

const initialState = {
    expenses: [

        {id: 1, name: "chicken",cost: 10,type: "food"},
        {id: 2, name: "tv",cost: 350,type: "electronic"},
        {id: 3, name: "gas",cost: 80,type: "car"},
    ]
}

// Use createContext to create context
export const GlobalContext = createContext(initialState);

// Create provider component so it can be accessed
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Define function to delete an expense for GlobalProvider
    function deleteExpense(id) {
        dispatch({
            type: "DELETE",
            payload: id
        });
    }

    function addExpense(expense) {
        dispatch({
            type: "ADD",
            payload: expense
        });
    }

    return (
        <GlobalContext.Provider value={{
            expenses: state.expenses,
            deleteExpense,
            addExpense
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
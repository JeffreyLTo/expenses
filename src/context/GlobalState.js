import React, {createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Create variable for global initial state
const defaultValue = {
    expenses: [
        {id: 1, name: 'Food', cost: 20, category: 'Blah'},
        {id: 2, name: 'TV', cost: 300, category: "Electronics"},
        {id: 3, name: 'Game', cost: 80, category: 'Fun'}

    ]
}

// Create context
export const GlobalContext = createContext(defaultValue);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, defaultValue)

    return (<GlobalContext.Provider value={{
        expenses: state.expenses
    }}>
    {children}
    </GlobalContext.Provider>);
}
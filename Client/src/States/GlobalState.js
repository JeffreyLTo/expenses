import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios'; 

//Need to create an initial state for app contains array of expenses, error status, and loading status
const initialState = {
    expenses: [],
    error: null,
    loading: true,
}

// Use createContext to create context and give access to initial state
export const GlobalContext = createContext(initialState);

// Create provider component so it can be accessed
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Define function to delete an expense for GlobalProvider
    async function deleteExpense(id) {

        // Attempt to use axios delete method to delete by MongoDB id
        try{
            await axios.delete(`/api/v1/expenses/${id}`);

            dispatch({
                type: "DELETE",
                payload: id
            });

        }
        catch (err){
                // On failure dispatch object with error action and a payload containing the error
                dispatch({
                    type: 'ERROR',
                    payload: err.response.data.error,
                });

        }
        
    }

    //Define function to add a new expense to the global state
    async function addExpense(expense) {

        // Create object for sending data
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        // Attempt to use axios post method to push new expense onto list
        try{

            const res = await axios.post('/api/v1/expenses', expense, config);

            dispatch({
                type: "ADD",
                payload: res.data.data
            });


        }
        catch (err) {
            // On failure dispatch object with error action and a payload containing the error
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error,
            });
        }

    }

    //Create async function to pull expense list from backend database
    async function getExpenses() {

        // Attempt axios get request to get global state of expenses
        try {
            const res = await axios.get('/api/v1/expenses')
            
            // If successful, res will contain all the information of expenses, need to just pull data portion
            // Use dispatch to send object containing type of action, as well as data
            dispatch({
                type: 'GET',
                payload: res.data.data
            });
        }
        catch (err) {
            // On failure dispatch object with error action and a payload containing the error
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error,
            });

        }
    }

    // Define what can be accessed from the GlobalState when defined in a const
    return (
        <GlobalContext.Provider value={{
            expenses: state.expenses,
            error: state.error,
            loading: state.loading,
            getExpenses,
            deleteExpense,
            addExpense
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
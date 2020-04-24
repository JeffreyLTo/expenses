export default(state, action) => {
    switch(action.type) {

        // Case for get type of action grab current state, append the payload onto global expense list
        case 'GET':
            return {
                ...state,
                loading: false,
                expenses: action.payload,
            }

        // Case for error when trying to manipulate global state. grab state, set error to err message
        case 'ERROR': {
            return {
                ...state,
                error: action.payload,
            }
        }

        // Case for delete type of action remake expense list and filter our deleted expense by id
        case 'DELETE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense._id !== action.payload)
            }

        // Case for add type of action grab current state, add new state then append rest
        case 'ADD':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }

        default:
            return state;
    }

}
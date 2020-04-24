export default(state, action) => {
    switch(action.type) {

        // Case for delete type of action
        case 'DELETE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            }

        // Case for add type of action
        case 'ADD':
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            }

        default:
            return state;
    }

}
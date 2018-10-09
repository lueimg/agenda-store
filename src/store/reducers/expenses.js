import { PredefinedExpensesActionTypes } from "../actions/expenses";


const defaultState = {
}


export function getAll(state) {
    return Object.keys(state).map( item => state[item]) || [];
}

export default function PredefinedExpenses (state = defaultState, action ) { 
    switch (action.type) {
        case PredefinedExpensesActionTypes.load:
            return action.payload;
        case PredefinedExpensesActionTypes.add:
        case PredefinedExpensesActionTypes.update:
            return {...state , [action.payload.id]: { ...state[action.payload.id],  ...action.payload}};
        case PredefinedExpensesActionTypes.remove:
            const newState = { ...state };
            delete newState[action.payload.id];
            return Object.keys(newState).reduce((acc, item) => ({ ...acc, [state[item].id]: {...state[item]} }) , {});
        default:
            return state;
    }
}
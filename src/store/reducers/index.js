import { combineReducers } from 'redux';
import app from './app';
import expenses from './expenses';
import user from './user';

const rootReducer = combineReducers({
    app,
    expenses,
    user
});

export default rootReducer;
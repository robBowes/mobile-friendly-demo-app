import {combineReducers} from 'redux';
import user from './user.js';
import view from './view.js';

const allReducers = combineReducers({
    user,
    view,
});

export default allReducers;

import {combineReducers} from 'redux';
import user from './user.js';
import view from './view.js';
import posts from './posts.js';

const allReducers = combineReducers({
    user,
    view,
    posts,
});

export default allReducers;

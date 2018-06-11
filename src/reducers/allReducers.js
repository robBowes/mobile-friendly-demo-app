import {combineReducers} from 'redux';
import user from './user.js';
import view from './view.js';
import posts from './posts.js';
import albums from './albums.js';
import users from './users.js';

const allReducers = combineReducers({
    user,
    view,
    posts,
    albums,
    users,
});

export default allReducers;

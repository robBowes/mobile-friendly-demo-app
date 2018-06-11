import {combineReducers} from 'redux';
import user from './user.js';
import view from './view.js';
import posts from './posts.js';
import albums from './albums.js';

const allReducers = combineReducers({
    user,
    view,
    posts,
    albums,
});

export default allReducers;

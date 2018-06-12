import {mapById} from './utils';

export default (state = {}, action) => {
    let newState = {...state};
    if (action.type === 'LOGIN') {
        Object.assign(newState, ...action.payload);
    } else if (action.type === 'POSTS') {
        newState.posts = action.payload.reduce(mapById, {});
    } else if (action.type === 'ALBUMS') {
        newState.albums = action.payload;
    }
    return newState;
};

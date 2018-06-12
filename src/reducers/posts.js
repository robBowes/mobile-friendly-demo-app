import {mapById} from './utils';

export default (state={}, action) => {
    let newState = {...state};
    if (action.type === 'POSTS') {
        newState = action.payload.reduce(mapById, {...newState});
    } else if (action.type === 'COMMENTS') {
        if (newState[action.payload.id]) {
            newState[action.payload.id].comments = action.payload.comments;
        }
    }
    return newState;
};

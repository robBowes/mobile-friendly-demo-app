import {mapById} from './utils';
import _ from 'lodash';

export default (state={}, action) => {
    let newState = {...state};
    if (action.type === 'POSTS') {
        newState = action.payload.reduce(mapById, {...newState});
    } else if (action.type === 'COMMENTS') {
        if (newState[action.payload.id].comments) {
            newState[action.payload.id].comments =
            [...action.payload.comments, ...newState[action.payload.id].comments];
        } else newState[action.payload.id].comments = action.payload.comments;
    } else if (action.type === 'SAVE_COMMENT') {
        console.log('save');
        newState[action.payload.id].comments = [...newState[action.payload.id].comments,
        {
            body: action.payload.comment,
            email: action.payload.email,
            postId: action.payload.postId,
            name: action.payload.name,
        }];
    }
    return newState;
};

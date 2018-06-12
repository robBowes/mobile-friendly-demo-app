import {mapById} from './utils';

export default (state = {}, action) => {
    let newState = Object.assign({}, state);
    if (action.type === 'ALL_USERS') {
        newState = action.payload.reduce(mapById, {});
    }
    return newState;
};

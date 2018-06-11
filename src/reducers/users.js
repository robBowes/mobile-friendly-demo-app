export default (state = {}, action) => {
    let newState = Object.assign({}, state);
    if (action.type === 'ALL_USERS') {
        newState = Object.assign(newState, action.payload);
    }
    return newState;
};

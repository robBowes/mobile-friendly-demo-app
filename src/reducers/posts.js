export default (state={}, action) => {
    let newState = {...state};
    if (action.type === 'POSTS') {
        newState = {...action.payload, ...newState};
    } else if (action.type === 'COMMENTS') {
        if (newState[action.payload.postId]) {
            newState[action.payload.postId].comments = action.payload;
        }
    }
    return newState;
};

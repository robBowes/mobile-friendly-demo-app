export default (state={}, action) => {
    let newState = {...state};
    if (action.type === 'POSTS') {
        newState = {...action.payload, ...newState};
    } else if (action.type === 'COMMENTS') {
        if (newState[payload.postId]) {
            newState[payload.postId].comments = payload;
        }
    }
    return newState;
};

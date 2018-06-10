export default (state = {}, action) => {
    let newState = {...state};
    if (action.type === 'LOGIN') {
        Object.assign(newState, ...action.payload);
    } else if (action.type === 'POSTS') {
        newState.posts = action.payload;
    } else if (action.type === 'ALBUMS') {
        newState.albums = action.payload;
    }
    return newState;
};

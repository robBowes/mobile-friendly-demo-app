export default (state = {}, action) => {
    let newState = {...state};
    if (action.type === 'LOGIN') {
        newState.username = action.payload.username;
        newState.userId = action.payload.userId;
        console.log(action);
    } else if (action.type === 'POSTS') {
        newState.posts = action.payload;
    } else if (action.type === 'ALBUMS') {
        newState.albums = action.payload;
    }
    return newState;
};

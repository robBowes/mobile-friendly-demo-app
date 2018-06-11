export default (state = {}, action) => {
    let newState = Object.assign({}, state);
    if (action.type === 'ALBUMS') {
        action.payload.forEach((album)=>{
            newState[album.id] = album;
        });
    } else if (action.type === 'SAVE_ALBUM') {
        newState[action.payload.id] = action.payload.album;
    } else if (action.type === 'SAVE_PHOTOS') {
        newState[action.payload.id].photos = action.payload.photos;
    }
    return newState;
};

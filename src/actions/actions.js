const login = (login) => ({
        type: 'LOGIN',
        payload: login,
});
const savePosts = (posts) => ({
        type: 'POSTS',
        payload: posts,
});
const saveUserAlbums = (albums) => ({
        type: 'ALBUMS',
        payload: albums,
});
const displayPost = (postId) => ({
        type: 'DISPLAY_POST',
        payload: postId,
});
const home = () => ({
        type: 'HOME',
        payload: false,
});
const saveComments = (comments, id) => ({
        type: 'COMMENTS',
        payload: {comments, id},
});
const showUser = (id) => ({
        type: 'USER',
        payload: id,
});
const saveAlbum = (album, id) => ({
        type: 'SAVE_ALBUM',
        payload: {album, id},
});
const savePhotos = (photos, id) => ({
        type: 'SAVE_PHOTOS',
        payload: {photos, id},
});

export {
        login,
        savePosts,
        saveUserAlbums,
        displayPost,
        home,
        saveComments,
        saveAlbum,
        savePhotos,
};

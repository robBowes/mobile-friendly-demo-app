const login = (login) => ({
        type: 'LOGIN',
        payload: login,
});
const savePosts = (posts) => ({
        type: 'POSTS',
        payload: posts,
});
const saveAlbums = (albums) => ({
        type: 'ALBUMS',
        payload: albums,
});
const displayPost = (postId) => ({
        type: 'DISPLAY_POST',
        payload: postId,
});
const home = () => ({
        type: 'HOME',
});
const saveComments = (comments, id) => ({
        type: 'COMMENTS',
        payload: {comments, id},
});

export {
        login,
        savePosts,
        saveAlbums,
        displayPost,
        home,
        saveComments,
};

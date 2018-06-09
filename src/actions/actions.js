const login = (loginObj) => ({
        type: 'LOGIN',
        payload: {
                username: loginObj.username,
                userId: loginObj.userId,
        },
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

export {
        login,
        savePosts,
        saveAlbums,
        displayPost,
        home,
};

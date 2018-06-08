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

export {login, savePosts, saveAlbums};

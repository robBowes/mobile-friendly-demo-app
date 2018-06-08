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

export {login, savePosts};

const fetchJsonPlaceHolder = (path, query) => async (param) =>{
    let reply = await fetch(`https://jsonplaceholder.typicode.com/${path}?${query}=${param}`);
    return await reply.json();
};

const fetchUserAlbums = fetchJsonPlaceHolder('albums', 'userId');
const fetchUserPosts = fetchJsonPlaceHolder('posts', 'userId');
const fetchUser = fetchJsonPlaceHolder('users', 'username');
const fetchAlbumPhotos = fetchJsonPlaceHolder('photos', 'albumId');

const fetchPostComments = async (postId) => {
    let reply = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return await reply.json();
};

const putComment = async (comment, postId, email) => {
    let reply = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    {
        method: 'PUT', body: {
            comment: JSON.stringify(comment),
            email: JSON.stringify(email),
        },
    });
    console.log(reply);
};

const fetchAllUsers = async () => {
    let reply = await fetch('https://jsonplaceholder.typicode.com/users');
    return await reply.json();
};

export {
    fetchUserAlbums,
    fetchUserPosts,
    fetchPostComments,
    fetchUser,
    putComment,
    fetchAlbumPhotos,
    fetchAllUsers,
};

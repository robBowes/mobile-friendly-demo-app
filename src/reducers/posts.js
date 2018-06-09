export default (state={}, action) => {
    let newState = {...state};
    if (action.type === 'POSTS') {
        newState = action.payload.reduce((acc, el)=>{
            acc[el.id] = el;
            return acc;
        }, {...newState});
    } else if (action.type === 'COMMENTS') {
        if (newState[action.payload.id]) {
            newState[action.payload.id].comments = action.payload.comments;
        }
    }
    return newState;
};

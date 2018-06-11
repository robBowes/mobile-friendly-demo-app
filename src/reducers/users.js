export default (state = {}, action) => {
    let newState = Object.assign({}, state);
    if (action.type === 'ALL_USERS') {
        newState = action.payload.reduce((acc, el)=>{
            acc[el.id] = el;
            return acc;
        }, {});
    }
    return newState;
};

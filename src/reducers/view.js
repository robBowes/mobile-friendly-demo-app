export default (view = 'LOGIN', action) =>{
    let newView = view;
    if (action.type === 'LOGIN') {
        newView = 'HOME';
    }
    return newView;
};

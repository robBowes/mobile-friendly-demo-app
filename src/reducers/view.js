export default (view = {
    name: 'LOGIN',
}, action) =>{
    let newView = view;
    if (action.type === 'LOGIN') {
        newView.name = 'HOME';
        newView.post = null;
        newView.userId = false;
    } else if (action.type === 'HOME') {
        newView.name = 'HOME';
        newView.post = null;
        newView.userId = false;
    } else if (action.type === 'DISPLAY_POST') {
        newView.name = 'POST';
    } else if (action.type === 'LOGOUT') {
        newView.name = 'LOGIN';
    }
    return newView;
};

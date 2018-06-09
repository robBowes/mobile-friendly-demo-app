export default (view = {
    name: 'LOGIN',
}, action) =>{
    let newView = view;
    if (action.type === 'LOGIN'||
        action.type === 'HOME'
    ) {
        newView.name = 'HOME';
        newView.post = null;
    } else if (action.type === 'DISPLAY_POST') {
        newView.name = 'POST';
        newView.post = action.payload;
    }
    return newView;
};

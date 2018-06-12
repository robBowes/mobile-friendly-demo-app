import React, {Component} from 'react';
import {login, home} from '../actions/actions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchUser} from '../api';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: 'Bret',
        };
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({username: event.target.value});
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        let user = await fetchUser(this.state.username);
        if (user) this.props.dispatch(login(user));
        else alert('invalid login');
        this.props.dispatch(home());
    }
    render() {
        if (this.props.view==='HOME') {
            return <Redirect to='/home'/>;
        }
        return (
            <div>
            <form
            onSubmit={this.handleSubmit} >
                <input type="text"
                value={this.state.username}
                onChange={this.handleChange} />
                <input type="submit"
                value="Login" />
            </form>
            </div>
        );
    }
}
const mapStateToProps = (state)=>({
    view: state.view.name,
});
export default connect(mapStateToProps)(Login);

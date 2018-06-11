import React, {Component} from 'react';
import {login, home} from '../actions/actions';
import fauxFetch from '../fauxFetch';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

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
        let reply = await fetch('http://jsonplaceholder.typicode.com/users?username='+this.state.username);
        let json = await reply.json();
        if (json) this.props.dispatch(login(json));
        else alert(reply.reason);
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

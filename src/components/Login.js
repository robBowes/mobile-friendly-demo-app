import React, {Component} from 'react';
import {login} from '../actions/actions';
import fauxFetch from '../fauxFetch';
import {connect} from 'react-redux';

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
        // let reply = fauxFetch('/login', this.state.username);
        let reply = await fetch('http://jsonplaceholder.typicode.com/users?username='+this.state.username);
        let json = await reply.json();
        if (json) this.props.dispatch(login(json));
        else alert(reply.reason);
    }
    render() {
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

export default connect()(Login);

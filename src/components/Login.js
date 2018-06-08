import React, {Component} from 'react';
import {login} from '../actions/actions';
import fauxFetch from '../fauxFetch';
import {connect} from 'react-redux';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
        };
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({username: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let reply = fauxFetch('/login', this.state.username);
        if (reply.status) this.props.dispatch(login(reply));
        else alert(reply.reason);
    }
    render() {
        return (
            <div>
            <form
            onSubmit={this.handleSubmit}
            >
                <input type="text"
                value={this.state.username}
                onChange={this.handleChange}
                />
                <input type="submit"
                value="Login"/>
            </form>
            </div>
        );
    }
}

export default connect()(Login);

import React, {Component} from 'react';
import {login, home} from '../actions/actions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchUser} from '../api';
import {raisedButton} from './css/classes';

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
    handleSubmit = async (event) => {
        event.preventDefault();
        let user = await fetchUser(this.state.username);
        if (user[0]) {
            this.props.dispatch(login(user));
            this.props.dispatch(home());
        } else alert('Try username: Bret');
    }
    componentDidMount() {
        if (window.componentHandler) {
            window.componentHandler.upgradeAllRegistered();
        }
    }
    render() {
        if (this.props.view==='HOME') {
            return <Redirect to='/home'/>;
        }
        return (
            <div>
            <form
            onSubmit={this.handleSubmit} >
                <div className="mdl-textfield mdl-js-textfield">
                    <input type="text"
                    id="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    className="mdl-textfield__input"/>
                    <label htmlFor="username"
                    className="mdl-textfield__label">Username</label>
                    <div className="mdl-tooltip"
                    htmlFor="username">Hint: Try "Bret"</div>
                </div>
                <input type="submit"
                value="Login"
                className={raisedButton}/>
            </form>
            </div>
        );
    }
}
const mapStateToProps = (state)=>({
    view: state.view.name,
});
export default connect(mapStateToProps)(Login);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {saveAllUsers} from '../actions/actions';
import _ from 'lodash';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
        };
    }
    componentWillMount = async () => {
        let reply = await fetch('http://jsonplaceholder.typicode.com/users');
        let users = await reply.json();
        this.props.dispatch(saveAllUsers(users));
    }
    handleChange = (event) => {
        this.setState({search: event.target.value});
    }
    handleSubmit = async (event) => {
        event.preventDefault();
    }
    renderUsers = (users, search) => {
        if (!search) return;
        let showUsers = _.filter(users,
            (user)=>user.name.includes(this.state.search));
        return showUsers.map((user, i)=>(
            <div key={'user'+i}>
                <Link to={`/profile/${user.id}`}>
                    {user.name}
                </Link>
            </div>
        ));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <button type="submit">Search</button>
                </form>
                <div>
                    {this.renderUsers(this.props.users, this.state.search)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
});
export default withRouter(connect(mapStateToProps)(Search));

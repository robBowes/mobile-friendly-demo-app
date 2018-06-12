import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {saveAllUsers} from '../actions/actions';
import _ from 'lodash';
import {raisedButton} from './css/classes';
import {fetchAllUsers} from '../api';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
        };
    }
    componentWillMount = async () => {
        let users = await fetchAllUsers();
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
            <div
            className="card-content mdl-card mdl-cell mdl-shadow--2dp"
            key={'user'+i}>
                <Link to={`/profile/${user.id}`}>
                    <h6 className="mdl-card__title-text"> {user.name} </h6>
                    <div className="mdl-card__actions">
                        <button
                        className="mdl-button mdl-js-button mdl-button--fab
                        mdl-js-ripple-effect mdl-button--colored">
                            <i className="material-icons">account_circle</i>
                        </button>
                    </div>
                </Link>
            </div>
        ));
    }
    componentDidMount() {
        window.componentHandler.upgradeDom();
    }
    render() {
        return (
            <div className="search">
            <form onSubmit={this.handleSubmit}>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input type="text"
                        className="mdl-textfield__input"
                        id="name"
                        onChange={this.handleChange}/>
                        <label
                        className="mdl-textfield__label"
                        htmlFor="name">Search</label>
                    </div>
                    <input type="submit"
                    value="Search"
                    className={raisedButton}/>
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

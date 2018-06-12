import React, {Component} from 'react';
import {connect} from 'react-redux';
import HorizonalPosts from './subcomponents/HorizonalPosts';
import {fetchUserPosts} from '../api';
import {savePosts} from '../actions/actions';
import {Redirect} from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.user = props.users[props.match.params.id];
    }
    componentWillMount = async () => {
        if (!this.user) return;
        let posts = await fetchUserPosts(this.user.id);
        this.props.dispatch(savePosts(posts));
    }
    render() {
        if (this.props.view === 'LOGIN') {
            return <Redirect to='/'/>;
        }
        let user = this.user;
        return (
            <div>
                <h1>{user.name}</h1>
                <table
                className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                    <thead>
                        <tr>
                            <th className="mdl-data-table__cell--non-numeric">
                                Profile
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="mdl-data-table__cell--non-numeric">
                                Email
                            </td>
                            <td className="mdl-data-table__cell--non-numeric">
                                {user.email}
                            </td>
                        </tr>
                        <tr>
                            <td className="mdl-data-table__cell--non-numeric">
                                Address
                            </td>
                            <td className="mdl-data-table__cell--non-numeric">
                                {user.address.street}, {user.address.suite}
                                <br/>
                                {user.address.city}
                            </td>
                        </tr>
                        <tr>
                            <td className="mdl-data-table__cell--non-numeric">
                                Phone
                            </td>
                            <td className="mdl-data-table__cell--non-numeric">
                                {user.phone}
                            </td>
                        </tr>
                        <tr>
                            <td className="mdl-data-table__cell--non-numeric">
                                Website
                            </td>
                            <td className="mdl-data-table__cell--non-numeric">
                                {user.website}
                            </td>
                        </tr>
                        <tr>
                            <td className="mdl-data-table__cell--non-numeric">
                                Company
                            </td>
                            <td className="mdl-data-table__cell--non-numeric">
                                {user.company.name}
                                <br/>
                                {user.company.catchPhrase}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3>{user.name.split(' ')[0]}'s Posts</h3>
                <HorizonalPosts posts={this.props.posts} id={user.id}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
    posts: state.posts,
    albums: state.albums,
    view: state.view.name,
});
export default connect(mapStateToProps)(Profile);

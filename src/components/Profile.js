import React, {Component} from 'react';
import {connect} from 'react-redux';
import HorizonalPosts from './subcomponents/HorizonalPosts';
import {fetchUserPosts} from '../api';
import {saveAlbum, savePosts} from '../actions/actions';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.user = props.users[props.match.params.id];
    }
    componentWillMount = async () => {
        let posts = await fetchUserPosts(this.user.id);
        this.props.dispatch(savePosts(posts));
    }
    render() {
        let user = this.user;
        return (
            <div>
                    <h1>{user.name}</h1>
                <table>
                    <tbody>

                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">Address</td>
                        <td>{user.address.street}, {user.address.suite}</td>
                    </tr>
                    <tr>
                        <td>{user.address.city}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>{user.website}</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">Company</td>
                        <td>{user.company.name}</td>
                    </tr>
                    <tr>
                        <td>{user.company.catchPhrase}</td>
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
});
export default connect(mapStateToProps)(Profile);

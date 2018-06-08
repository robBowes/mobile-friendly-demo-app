import React, {Component} from 'react';
import {savePosts} from '../actions/actions';
import {connect} from 'react-redux';

class Home extends Component {
    componentWillMount = async () => {
        let requestPosts = await fetch('http://jsonplaceholder.typicode.com/posts?userId='+this.props.userId);
        let posts = await requestPosts.json();
        this.props.dispatch(savePosts(posts));
        let requestAlbums = await fetch('http://jsonplaceholder.typicode.com/albums');
    }
    render() {
        return (
            <div>
            <div>
                My Posts
            </div>
            <div>
                My Albums
            </div>
            <div>
                Browse Users
            </div>
            <div>
                Search For User
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    userId: state.user.userId,
});
export default connect(mapStateToProps)(Home);

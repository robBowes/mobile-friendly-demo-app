import React, {Component} from 'react';
import {savePosts, saveAlbums} from '../actions/actions';
import {connect} from 'react-redux';
import async from 'async';

class Home extends Component {
    componentWillMount = async () => {
        async.parallel({
            posts: async () =>{
                let requestPosts = await fetch('http://jsonplaceholder.typicode.com/posts?userId='+this.props.userId);
                let posts = await requestPosts.json();
                this.props.dispatch(savePosts(posts));
            },
            albums: async () => {
                let requestAlbums = await fetch('http://jsonplaceholder.typicode.com/albums?userId='+this.props.userId);
                let albums = await requestAlbums.json();
                this.props.dispatch(saveAlbums(albums));
            },
        });
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

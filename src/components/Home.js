import React, {Component} from 'react';
import {savePosts, saveAlbums} from '../actions/actions';
import {connect} from 'react-redux';
import async from 'async';
import '../css/home.css';

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
    renderPosts = (posts) => {
        if (!posts) return;
        return posts.map((post)=>(
            <div className="card-content">
                <div className="content">
                <p>{post.title}</p>
                <p>{post.body}</p>
                </div>
                <div className="downChevron">⌄</div>
            </div>
        ));
    }
    // renderAlbums = (albums) => {
    //     if (!albums) return;
    //     return albums.map((album)=>(
    //         <div className="card-content">
    //             <p>{album.title}</p>
    //             <p>{album.body}</p>
    //         </div>
    //     ));
    // }
    render() {
        return (
            <div>
                <h2>My Posts</h2>
                <div className="cardHolder">
                    <section className="card">
                        {this.renderPosts(this.props.posts)}
                    </section>
                </div>
            <div>
                <h2>My Albums</h2>
                <div className="cardHolder">
                    <section className="card">
                        {this.renderPosts(this.props.albums)}
                    </section>
                </div>
            </div>
            <div>
                <h2>Browse Users</h2>
            </div>
            <div>
                <h2>Search For User</h2>
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    userId: state.user.userId,
    posts: state.user.posts,
    albums: state.user.albums,
});
export default connect(mapStateToProps)(Home);

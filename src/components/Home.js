import React, {Component} from 'react';
import {savePosts, saveUserAlbums} from '../actions/actions';
import {connect} from 'react-redux';
import async from 'async';
import {displayPost} from '../actions/actions';
import '../css/home.css';
import {Redirect, Link, withRouter} from 'react-router-dom';

class Home extends Component {
    componentWillMount = async () => {
        let userId = this.props.showUser?this.props.showUser:this.props.userId;
        async.parallel({
            posts: async () =>{
                let requestPosts = await fetch('http://jsonplaceholder.typicode.com/posts?userId='+userId);
                let posts = await requestPosts.json();
                this.props.dispatch(savePosts(posts));
            },
            albums: async () => {
                let requestAlbums = await fetch('http://jsonplaceholder.typicode.com/albums?userId='+userId);
                let albums = await requestAlbums.json();
                this.props.dispatch(saveUserAlbums(albums));
            },
        });
    }
    renderPosts = (posts) => {
        if (!posts) return;
        return posts.map((post, i)=>(
            <div className="card-content" key={'post'+i}>
                <div className="content">
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
                <Link to={'/post/'+post.id} className="downChevron">
                    ⌄
                </Link>
            </div>
        ));
    }
    renderAlbums = (albums) => {
        if (!albums) return;
        return albums.map((album, i)=>(
            <div className="card-content" key={'album'+i}>
                <p>{album.title}</p>
                <p>{album.body}</p>
                <Link to={'/album/'+album.id} className="downChevron">
                    ⌄
                </Link>
            </div>
        ));
    }
    render() {
    if (!this.props.userId) {
        return <Redirect to='/'/>;
      }
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
                        {this.renderAlbums(this.props.albums)}
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
    userId: state.user.id,
    posts: state.user.posts,
    albums: state.user.albums,
    showUser: state.view.userId,
    view: state.view.name,
});
export default withRouter(connect(mapStateToProps)(Home));

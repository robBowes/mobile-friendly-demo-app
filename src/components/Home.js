import React, {Component} from 'react';
import {savePosts, saveUserAlbums} from '../actions/actions';
import {connect} from 'react-redux';
import async from 'async';
import {displayPost} from '../actions/actions';
import './css/home.css';
import {Redirect, Link, withRouter} from 'react-router-dom';
import HorizonalPosts from './subcomponents/HorizonalPosts';
import HorizontalAlbums from './subcomponents/HorizontalAlbums';
import {fetchUserPosts, fetchUserAlbums} from '../api';

class Home extends Component {
    componentWillMount = async () => {
        let userId = this.props.showUser?this.props.showUser:this.props.userId;
        async.parallel({
            posts: async () =>{
                let posts = await fetchUserPosts(userId);
                this.props.dispatch(savePosts(posts));
            },
            albums: async () => {
                let albums = await fetchUserAlbums(userId);
                this.props.dispatch(saveUserAlbums(albums));
            },
        });
    }
    componentDidMount() {
        if (window.componentHandler) {
            window.componentHandler.upgradeAllRegistered();
        }
    }
    render() {
    if (!this.props.userId) {
        return <Redirect to='/'/>;
      }
        return (
            <div>
                <h2>My Posts</h2>
                <div className="cardHolder">
                    <HorizonalPosts
                    posts={this.props.posts}
                    id={this.props.userId} />
                </div>
            <div>
                <h2>My Albums</h2>
                <div className="cardHolder">
                    <HorizontalAlbums albums={this.props.albums}/>
                </div>
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

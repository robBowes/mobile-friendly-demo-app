import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveComments} from '../actions/actions';
import {Redirect, withRouter} from 'react-router-dom';


class Post extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
    }
    componentWillMount = async () => {
        let reply = await fetch(`http://jsonplaceholder.typicode.com/posts/${this.id}/comments`);
        let comments = await reply.json();
        this.props.dispatch(saveComments(comments, this.id));
        this.render();
    }
    renderComments = (post) => {
        if (!post) return;
        return post.map((comment, i)=>(
                <div key={'comment'+ i}>
                    <h4>{comment.name}</h4>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            ));
    }
    render() {
        if (!this.props.userId) {
            return <Redirect to='/'/>;
          }
        const post = this.props.posts[this.id];
        return (
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                {this.renderComments(post.comments)}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    posts: state.posts,
    userId: state.user.id,
});
export default withRouter(connect(mapStateToProps)(Post));

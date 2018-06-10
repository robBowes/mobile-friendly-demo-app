import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveComments} from '../actions/actions';


class Post extends Component {
    componentWillMount = async () => {
        let reply = await fetch(`http://jsonplaceholder.typicode.com/posts/${this.props.post.id}/comments`);
        let comments = await reply.json();
        this.props.dispatch(saveComments(comments, this.props.post.id));
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
        const post = this.props.post;
        return (
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                {this.renderComments(this.props.comments)}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    post: state.view.post,
    comments: state.posts[state.view.post.id].comments,
});
export default connect(mapStateToProps)(Post);

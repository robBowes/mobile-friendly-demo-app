import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveComment, saveComments} from '../actions/actions';
import {Redirect, withRouter} from 'react-router-dom';
import {fetchPostComments, putComment} from '../api';


class Post extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.state = {
            comment: '',
            name: '',
        };
    }
    componentWillMount = async () => {
        let comments = await fetchPostComments(this.id);
        this.props.dispatch(saveComments(comments, this.id));
        this.render();
    }
    renderComments = (post) => {
        if (!post) return;
        return post.map((comment, i)=>(
                <div className="card-content mdl-card mdl-cell mdl-shadow--2dp"
                key={'comment'+ i}>
                    <div className="mdl-card__title">
                        <h5 className="mdl-card__title-text">{comment.name}</h5>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <p>{comment.email}</p>
                        <p>{comment.body}</p>
                    </div>
                </div>
            ));
    }
    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(saveComment(
            this.state.comment, this.id, this.props.email, this.state.name)
        );
        putComment(this.state.comment, this.id, this.props.email);
    }
    render() {
        if (!this.props.userId) {
            return <Redirect to='/'/>;
          }
        const post = this.props.posts[this.id];
        return (
            <div>
            <div className="card-content mdl-card mdl-cell mdl-shadow--2dp">
                <div className="content mdl-card-border">
                    <div className="mdl-card__title">
                        <h3 className="mdl-card__title-text">{post.title}</h3>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <p>{post.body}</p>
                    </div>
                 </div>
                 </div>
                 <div className="mdl-card-border">
                    {this.renderComments(post.comments)}
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                        id='name'
                        placeholder='Comment Title'
                        value={this.state.name}
                        onChange={this.handleChange}/>
                        <input type="text"
                        id='comment'
                        placeholder="Add a comment.."
                        value={this.state.comment}
                        onChange={this.handleChange}/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    posts: state.posts,
    userId: state.user.id,
    email: state.user.email,
});
export default withRouter(connect(mapStateToProps)(Post));

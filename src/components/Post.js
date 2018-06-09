import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveComments} from '../actions/actions';


class Post extends Component {
    componentWillMount = async () => {
        let reply = await fetch(`http://jsonplaceholder.typicode.com/posts/${this.props.post.id}/comments`);
        let comments = await reply.json();
        this.props.dispatch(saveComments(comments, this.props.post.id));
    }
    render() {
        return (
            <div>
                {/* {this.props} */}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    post: state.view.post,
});
export default connect(mapStateToProps)(Post);

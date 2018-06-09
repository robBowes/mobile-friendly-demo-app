import React, {Component} from 'react';
import {connect} from 'react-redux';


class Post extends Component {
    componentWillMount = async () => {
        let reply = await fetch(`http://jsonplaceholder.typicode.com/posts/${this.props.post.id}/comments`);
        let json = await reply.json();
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

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../css/home.css';
import _ from 'lodash';

class HorizonalPosts extends Component {
    renderPosts = (posts, id) => {
        console.log(this.props);
        if (!posts) return;
        return _.filter(posts, (post)=>post.userId===id).map((post, i)=>(
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
    render() {
        return (
            <div className='card'>
                {this.renderPosts(this.props.posts, this.props.id)}
            </div>
        );
    }
}

export default HorizonalPosts;

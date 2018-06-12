import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fabButton} from '../css/classes';
import _ from 'lodash';

class HorizonalPosts extends Component {
    renderPosts = (posts, id) => {
        if (!posts) return;
        return _.filter(posts, (post)=>post.userId===id).map((post, i)=>(
            <div className="card-content mdl-card mdl-cell mdl-shadow--2dp"
            key={'post'+i}>
                <div className="content mdl-card-border">
                    <div className="mdl-card__title">
                        <h5 className="mdl-card__title-text">{post.title}</h5>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <p>{post.body}</p>
                    </div>
                </div>
                <div className="mdl-card__actions">
                    <Link
                    className="expand"
                    to={'/post/'+post.id} >
                        <button className={fabButton}>
                            <i className="material-icons">expand_more</i>
                        </button>
                    </Link>
                </div>
            </div>
        ));
    }
    render() {
        return (
            <div className='card mdl-color--grey-100'>
                {this.renderPosts(this.props.posts, this.props.id)}
            </div>
        );
    }
}

export default HorizonalPosts;

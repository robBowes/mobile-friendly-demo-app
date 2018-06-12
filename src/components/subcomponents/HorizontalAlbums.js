import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fabButton} from '../css/classes';


class HorizontalAlbums extends Component {
    renderAlbums = (albums) => {
        if (!albums) return;
        return albums.map((album, i)=>(
            <div className="card-content mdl-card mdl-cell mdl-shadow--2dp"
            key={'album'+i}>
                <div className="content mdl-card-border">
                    <div className="mdl-card__title">
                        <h5 className="mdl-card__title-text">{album.title}</h5>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <p>{album.body}</p>
                    </div>
                    </div>
                    <div className="mdl-card__actions">
                        <Link
                        to={'/album/'+album.id}
                        className="expand">
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
            <div className="card">
                {this.renderAlbums(this.props.albums)}
            </div>
        );
    }
}

export default HorizontalAlbums;

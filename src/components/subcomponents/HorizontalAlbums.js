import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HorizontalAlbums extends Component {
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
        return (
            <div className="card">
                {this.renderAlbums(this.props.albums)}
            </div>
        );
    }
}

export default HorizontalAlbums;

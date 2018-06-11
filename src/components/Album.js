import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {saveAlbum, savePhotos} from '../actions/actions';
import '../css/album.css';

class Album extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
    }
    componentWillMount = async () => {
        if (!this.props.albums[this.id]) {
            let reply = await fetch(`http://jsonplaceholder.typicode.com/albums/${this.id}`);
            let album = await reply.json();
            this.props.dispatch(saveAlbum(album, this.id));
        }
        if (!this.props.albums[this.id].photos) {
            let reply = await fetch(`http://jsonplaceholder.typicode.com/photos?albumId=${this.id}`);
            let photos = await reply.json();
            this.props.dispatch(savePhotos(photos, this.id));
        }
    }
    renderPhotos = (photos) =>{
        if (!photos) return;
        return photos.map((photo, i)=>(
            <div>
                <img src={photo.thumbnailUrl}/>
            </div>
        ));
    }
    render() {
        const album = this.props.albums[this.id];
        if (!album) return (<div>Loading</div>);
        return (
            <div>
                <h2>{album.title}</h2>
                <div className="photoAlbum">
                    {this.renderPhotos(album.photos)}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    albums: state.albums,
});
export default withRouter(connect(mapStateToProps)(Album));

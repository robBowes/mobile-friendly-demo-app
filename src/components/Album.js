import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import {saveAlbum, savePhotos} from '../actions/actions';
import './css/album.css';
import {fetchUserAlbums, fetchAlbumPhotos} from '../api';
import LazyLoad from 'react-lazy-load';

class Album extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
    }
    componentWillMount = async () => {
        if (!this.props.albums[this.id]) return;
        if (!this.props.albums[this.id]) {
            let album = await fetchUserAlbums(this.id);
            this.props.dispatch(saveAlbum(album, this.id));
        }
        if (!this.props.albums[this.id].photos) {
            let photos = await fetchAlbumPhotos(this.id);
            this.props.dispatch(savePhotos(photos, this.id));
        }
    }
    renderPhotos = (photos) =>{
        if (!photos) return;
        return photos.map((photo, i)=>(
            <div key={'photo' + i}>
                <LazyLoad height={150} width={150}>
                    <img
                    alt={photo.title}
                    src={photo.thumbnailUrl}/>
                </LazyLoad>
            </div>
        ));
    }
    render() {
        if (this.props.view === 'LOGIN') {
            return <Redirect to='/'/>;
        }
        const album = this.props.albums[this.id];
        if (!album) return (<div>Loading</div>);
        return (
            <div
            className="card-content
            mdl-card mdl-cell
            mdl-shadow--2dp
            mdl-color--grey-100">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{album.title}</h2>
                </div>
                <div className="photoAlbum">
                    {this.renderPhotos(album.photos)}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    albums: state.albums,
    view: state.view.name,
});
export default withRouter(connect(mapStateToProps)(Album));

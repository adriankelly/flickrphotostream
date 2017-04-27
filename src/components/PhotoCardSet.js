import React, { Component } from 'react';
import PhotoCard from './PhotoCard';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/photos';
import { Row } from 'react-bootstrap';


class PhotoCardSet extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.flickr.com/services/feeds/photos_public.gne?format=json');
  }

  render() {
    return (
      <Row>
        {this.props.photos.map((photo, index) => (
            <PhotoCard photo={photo} key={index} />
        ))}
     </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hasErrored: state.photosHasErrored,
    isLoading: state.photosIsLoading,
    photos: state.photos
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchPhotos(url))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PhotoCardSet);
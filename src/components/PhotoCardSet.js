import React, { Component } from 'react';
import PhotoCard from './PhotoCard';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/photos';

class PhotoCardSet extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.flickr.com/services/feeds/photos_public.gne?format=json');
  }

  render() {
    return (
      <div>
        Hello from PhotoCardSet
        <PhotoCard />
      </div>
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
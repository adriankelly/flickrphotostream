import React, { Component } from 'react';
import PhotoCard from './PhotoCard';
import FilterForm from './FilterForm';
import { connect } from 'react-redux';
import { fetchPhotos, isFiltering } from '../actions/photos';
import { Row } from 'react-bootstrap';

class PhotoCardSet extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.flickr.com/services/feeds/photos_public.gne?format=json');
  }

  render() {
    const { filterBy, updateFiltering } = this.props;
    
    return (
      <div>
        <Row>
          <FilterForm onChange={updateFiltering} />
        </Row>
        
        <Row>
          {this.props.photos
            .filter(photo => photo.tags.indexOf(filterBy) > -1)
            .map((photo, index) => <PhotoCard photo={photo} key={index} />)
          }
        </Row>
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hasErrored: state.photosHasErrored,
    isLoading: state.photosIsLoading,
    filterBy: state.filtering.filterBy,
    photos: state.photos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchPhotos(url)),
    updateFiltering: (ev) => dispatch(isFiltering(ev.target.value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoCardSet);
import $ from 'jquery';

/* Action Creators */

// hasErrored and isLoading receive boolean values
export function photosHasErrored(hasErrored) {
  return { type: 'PHOTOS_HAS_ERRORED', hasErrored }
}

export function photosIsLoading(isLoading) {
  return { type: 'PHOTOS_IS_LOADING', isLoading }
}

// API data passed in as json
export function receivePhotosSuccess(photos) {
  return { type: 'RECEIVE_PHOTOS_SUCCESS', photos }
}

export function isFiltering(filterTerm) {
  return { type: 'IS_FILTERING', filterTerm }
}


/**
 * Redux Thunk Action Creator
 * Returns function allowing for asynchronous API calls
 * Also dispatching synchronous Action Creators defined above
 */
export function fetchPhotos(url) {
  return (dispatch) => {
    dispatch(photosIsLoading(true));

    // Public Flickr API at provided URL not supporting CORS
    // Using JSONP instead of fetch()
    $.ajax(url + '&jsoncallback=?', {
        dataType: 'jsonp'
    })
    .then((response) => {
      dispatch(photosIsLoading(false))
      dispatch(receivePhotosSuccess(response.items))
    })
    .catch(() => dispatch(photosHasErrored(true)));
  }
}
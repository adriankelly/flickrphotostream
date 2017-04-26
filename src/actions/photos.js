/**
 * Action Creators
 */

// hasErrored and isLoading receive boolean values
export function photosHasErrored(hasErrored) {
  return { type: 'PHOTOS_HAS_ERRORED', hasErrored }
}

export function photosIsLoading(isLoading) {
  return { type: 'PHOTOS_IS_LOADING', isLoading }
}

// API data passed in as json
export function receivePhotosSuccess(photos, json) {
  return {
    type: 'RECEIVE_PHOTOS_SUCCESS',
    photos,
    photoData: json.data.children.map(child => child.data),
    receivedAt: Date.now()
    }
}


/**
 * Redux Thunk Action Creator
 * Returns function allowing for asynchronous API calls
 * Also dispatching synchronous Action Creators defined above
 */
export function fetchPhotos(url) {
  return (dispatch) => {

    dispatch(photosIsLoading(true));

    fetch(url) //test with github api
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        dispatch(photosIsLoading(false))
        dispatch(receivePhotosSuccess(true, json))
      })
      .catch(() => dispatch(photosHasErrored(true)));
  }
}
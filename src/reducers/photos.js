export function photosHasErrored(state = false, action) {
  switch (action.type) {
    case 'PHOTOS_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function photosIsLoading(state = false, action) {
  switch (action.type) {
    case 'PHOTOS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function photos(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_PHOTOS_SUCCESS':
      return action.photoData;
    default:
      return state;
  }
}
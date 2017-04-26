import { combineReducers } from 'redux';
import { photosHasErrored, photosIsLoading, photos } from './photos';

export default combineReducers({
  photosHasErrored,
  photosIsLoading,
  photos
});
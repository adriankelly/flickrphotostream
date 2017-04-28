import { combineReducers } from 'redux';
import { photosHasErrored, photosIsLoading, photos, filtering } from './photos';

export default combineReducers({
  photosHasErrored,
  photosIsLoading,
  photos,
  filtering
});
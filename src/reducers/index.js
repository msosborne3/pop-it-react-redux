import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import tvShowReducer from './tvShowReducer';

export default combineReducers({
  movies: moviesReducer,
  shows: tvShowReducer
})
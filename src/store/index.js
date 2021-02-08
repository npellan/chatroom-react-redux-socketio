/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import reducer from './reducer';

// On créé le store et on lui donne le réduceur en paramètre
// Afin d'initialiser tout ça et de permettre de traduire
// des intentions en nouveau state
const store = createStore(
  reducer,
  /* initialState */
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

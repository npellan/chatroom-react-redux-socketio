/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import authMiddleware from 'src/middlewares/auth';
import socketMiddleware from 'src/middlewares/socket';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, /* preloadedState, */
  composeEnhancers(
    applyMiddleware(
      authMiddleware,
      socketMiddleware,
    ),
  ),
);

export default store;

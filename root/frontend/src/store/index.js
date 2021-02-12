/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import logMiddleware from 'src/middlewares/log';
import authMiddleware from 'src/middlewares/auth';
import socketMiddleware from 'src/middlewares/socket';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// On créé le store en lui donnant le reducer afin transformer les actions
// en changement d'état, et pour calculer aussi l'état initial
const store = createStore(
  reducer, /* preloadedState, */
  composeEnhancers(
    applyMiddleware(
      logMiddleware,
      authMiddleware,
      socketMiddleware,
    ),
  ),
);

export default store;

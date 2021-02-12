/* eslint-disable no-case-declarations */
import {
  SEND_LOGIN,
  setPseudo,
} from 'src/actions';

import axios from 'src/api';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_LOGIN:
      const { settings: { email, password } } = store.getState();
      axios.post('/login', {
        email,
        password,
      }).then((result) => {
        store.dispatch(setPseudo(result.data.pseudo));
      });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

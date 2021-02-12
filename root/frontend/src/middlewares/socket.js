/* eslint-disable no-case-declarations */
import {
  WS_CONNECT,
  SEND_NEW_MESSAGE,
  addMessage,
} from 'src/actions';

let socket = null;

export default (store) => (next) => (action) => {
  console.log('Action de auth', action.type);
  switch (action.type) {
    case WS_CONNECT:
      socket = window.io('http://localhost:3001');
      socket.on('receive_message', (message) => {
        store.dispatch(addMessage(message.content));
      });
      return next(action);
    case SEND_NEW_MESSAGE:
      socket.emit('send_message', { author: 'Me', content: action.message });
      return next(action);
    default:
      return next(action);
  }
};

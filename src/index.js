// Import npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'src/store';

// Import locaux
import Chatroom from 'src/components/Chatroom';

// Render
const rootReactElement = (
  <Provider store={store}>
    <Chatroom />
  </Provider>
);

// On rend le composant dans la div root
render(rootReactElement, document.getElementById('root'));

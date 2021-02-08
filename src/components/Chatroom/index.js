// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';

// == Composant
const Chatroom = () => (
  <div className="chatroom">
    <Messages />
    <Form />
  </div>
);

// == Export
export default Chatroom;

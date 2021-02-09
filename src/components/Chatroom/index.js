// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/components/Settings';

// == Composant
const Chatroom = () => (
  <div className="chatroom">
    <Settings />
    <Messages />
    <Form />
  </div>
);

// == Export
export default Chatroom;

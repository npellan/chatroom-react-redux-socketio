// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Message from './Message';

// == Composant
const Messages = () => {
  const fakeMessages = ['Salut ça va ?', 'Moi ça va super bien', 'Réponds stp'];

  return (
    <div className="messages">
      {fakeMessages.map((message) => <Message sender="Super Chat" content={message} />)}
    </div>
  );
};

// == Export
export default Messages;

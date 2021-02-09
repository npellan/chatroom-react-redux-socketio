// == Import npm
import React from 'react';
import PropTypes, { string } from 'prop-types';

// == Import
import './styles.scss';

import Message from './Message';

// == Composant
const Messages = ({ messages }) => (
  <div className="messages">
    {messages.map((message) => <Message sender="Moi" content={message} />)}
    <Message sender="Ami" content="Ouais grave bien" isFriend />
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(string).isRequired,
};

// == Export
export default Messages;

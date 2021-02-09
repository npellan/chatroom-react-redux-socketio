// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import Message from './Message';

// == Composant
const Messages = ({ messages }) => (
  <div className="messages">
    {messages.map((message) => <Message key={message.id} sender={message.sender} content={message.content} />)}
    <Message sender="Ami" content="Ouais grave bien" isFriend />
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Messages.defaultProps = {
  messages: [],
};

// == Export
export default Messages;

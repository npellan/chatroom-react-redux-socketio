// == Import npm
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import Message from './Message';

// == Composant
const Messages = ({ messages }) => {
  const messagesContainer = useRef(null);

  const scrollToMyRef = () => {
    const scroll = messagesContainer.current.scrollHeight - messagesContainer.current.clientHeight;
    messagesContainer.current.scrollTo(0, scroll);
  };

  useEffect(() => {
    scrollToMyRef();
  }, [messages]);

  return (
    <div ref={messagesContainer} className="messages">
      {messages.map(
        (message) => (
          <Message
            key={message.id}
            sender={message.sender}
            content={message.content}
            isFriend={message.isFriend}
          />
        ),
      )}
    </div>
  );
};

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

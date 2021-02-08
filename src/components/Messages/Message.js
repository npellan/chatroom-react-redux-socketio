// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Message = ({ sender, content }) => (
  <div className="message">
    <p className="message__sender">{sender}</p>
    <p className="message__content">{content}</p>
  </div>
);

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

// == Export
export default Message;

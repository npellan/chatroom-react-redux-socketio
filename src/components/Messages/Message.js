// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import './styles.scss';

// == Composant
const Message = ({ sender, content, isFriend }) => (
  <div className={classNames('message', { 'message--other': isFriend })}>
    <p className="message__sender">{sender}</p>
    <p className="message__content">{content}</p>
  </div>
);

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isFriend: PropTypes.bool,
};

Message.defaultProps = {
  isFriend: false,
};

// == Export
export default Message;

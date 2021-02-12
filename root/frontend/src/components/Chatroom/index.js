// == Import npm
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// == Import
import './styles.scss';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import { wsConnect } from 'src/actions';

// == Composant
const Chatroom = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect());
  }, []);

  return (
    <div className="chatroom">
      <Settings />
      <Messages />
      <Form />
    </div>
  );
};

// == Export
export default Chatroom;

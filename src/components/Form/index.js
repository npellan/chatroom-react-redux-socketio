// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// == Composant
const Form = () => (
  <form className="form">
    <input type="text" placeholder="Saisissez votre message..." />
    <button type="submit">
      <FontAwesomeIcon
        className="submit__icon"
        icon={faPaperPlane}
      />
    </button>
  </form>
);

// == Export
export default Form;

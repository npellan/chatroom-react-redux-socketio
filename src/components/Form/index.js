// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// == Composant
const Form = ({ inputValue, changeInputValue }) => {
  const handleChange = (event) => {
    console.log(event);
    // Ici j'ai l'intention de changer la valeur du champ
    changeInputValue(event.target.value);
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="Saisissez votre message..."
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">
        <FontAwesomeIcon
          className="submit__icon"
          icon={faPaperPlane}
        />
      </button>
    </form>
  );
};

Form.propTypes = {
  inputValue: PropTypes.string,
  changeInputValue: PropTypes.func,
};

Form.defaultProps = {
  inputValue: '',
  changeInputValue: () => {},
};

// == Export
export default Form;

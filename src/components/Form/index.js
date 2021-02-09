// == Import npm
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// == Composant
const Form = ({ inputValue, changeInputValue, submitNewMessage }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleChange = (event) => {
    changeInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitNewMessage(inputValue);
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        ref={inputEl}
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
  submitNewMessage: PropTypes.func,
};

Form.defaultProps = {
  inputValue: '',
  changeInputValue: () => {},
  submitNewMessage: () => {},
};

// == Export
export default Form;

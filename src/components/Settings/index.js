// == Import npm
import React from 'react';
import { X } from 'react-feather';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import './styles.scss';

// == Composant
const Settings = ({
  toggleSettings, settingsOpen, changeEmailValue, changePwdValue, emailValue, pwdValue,
}) => {
  const openCloseSettings = () => {
    toggleSettings();
  };

  const handleEmailChange = (event) => {
    changeEmailValue(event.target.value);
  };

  const handlePwdChange = (event) => {
    changePwdValue(event.target.value);
  };

  return (
    <div className={classNames('settings', { 'settings--closed': !settingsOpen })}>
      <button
        type="button"
        className={classNames('settings__openclose', { 'settings__openclose--closed': !settingsOpen })}
        onClick={openCloseSettings}
      >
        <X size={16} color="#5300fe" />
      </button>
      <form
        className={classNames('settings__form', { 'settings__form--closed': !settingsOpen })}
      >
        <input
          type="email"
          className="settings__input"
          placeholder="Email"
          onChange={handleEmailChange}
          value={emailValue}
        />
        <input
          type="password"
          className="settings__input"
          placeholder="Mot de passe"
          onChange={handlePwdChange}
          value={pwdValue}
        />
        <button
          type="submit"
          className="settings__submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

Settings.propTypes = {
  settingsOpen: PropTypes.bool,
  toggleSettings: PropTypes.func,
  changeEmailValue: PropTypes.func,
  changePwdValue: PropTypes.func,
  emailValue: PropTypes.string,
  pwdValue: PropTypes.string,
};

Settings.defaultProps = {
  settingsOpen: false,
  toggleSettings: () => {},
  changeEmailValue: () => {},
  changePwdValue: () => {},
  emailValue: '',
  pwdValue: '',
};

// == Export
export default Settings;

// == Import npm
import React from 'react';
import { X } from 'react-feather';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import './styles.scss';

// == Composant
const Settings = ({
  toggleSettings, settingsOpen, changeemail, changepassword, email, password, onLogin, loading,
}) => {
  const openCloseSettings = () => {
    toggleSettings();
  };

  const handleEmailChange = (event) => {
    changeemail(event.target.value);
  };

  const handlePwdChange = (event) => {
    changepassword(event.target.value);
  };

  const handleSubmitSettings = (event) => {
    event.preventDefault();
    onLogin();
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
        onSubmit={handleSubmitSettings}
      >
        <input
          type="email"
          className="settings__input"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
        />
        <input
          type="password"
          className="settings__input"
          placeholder="Mot de passe"
          onChange={handlePwdChange}
          value={password}
        />
        <button
          className="settings__submit"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Chargement ...' : 'Envoyer'}
        </button>
      </form>
    </div>
  );
};

Settings.propTypes = {
  settingsOpen: PropTypes.bool,
  toggleSettings: PropTypes.func,
  changeemail: PropTypes.func,
  changepassword: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  loading: PropTypes.bool,
  onLogin: PropTypes.func,
};

Settings.defaultProps = {
  settingsOpen: false,
  toggleSettings: () => {},
  changeemail: () => {},
  changepassword: () => {},
  email: '',
  password: '',
  loading: false,
  onLogin: () => { },
};

// == Export
export default Settings;

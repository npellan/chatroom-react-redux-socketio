// == Import npm
import React from 'react';
import { X } from 'react-feather';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import './styles.scss';

// == Composant
const Settings = ({ toggleSettings, settingsOpen }) => {
  const openCloseSettings = () => {
    toggleSettings();
  };

  return (
    <div className="settings">
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
        />
        <input
          type="password"
          className="settings__input"
          placeholder="Mot de passe"
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
};

Settings.defaultProps = {
  settingsOpen: false,
  toggleSettings: () => {},
};

// == Export
export default Settings;

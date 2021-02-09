// == Import npm
import React from 'react';
import { X } from 'react-feather';

// == Import
import './styles.scss';

// == Composant
const Settings = () => (
  <div className="settings">
    <button type="button" className="settings__openclose">
      <X size={16} color="#5300fe" />
    </button>
    <form className="settings__form">
      <input type="email" className="settings__input" placeholder="Email" />
      <input type="password" className="settings__input" placeholder="Mot de passe" />
      <button type="submit" className="settings__submit">Envoyer</button>
    </form>
  </div>
);

// == Export
export default Settings;

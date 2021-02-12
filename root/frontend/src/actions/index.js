export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_NEW_MESSAGE = 'SUBMIT_NEW_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_PWD_VALUE = 'CHANGE_PWD_VALUE';
export const SEND_LOGIN = 'SEND_LOGIN';
export const SET_PSEUDO = 'SET_PSEUDO';

export const changeInputValue = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue,
});

export const submitNewMessage = (inputValue) => ({
  type: SUBMIT_NEW_MESSAGE,
  inputValue,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const changeemail = (email) => ({
  type: CHANGE_EMAIL_VALUE,
  email,
});

export const changepassword = (password) => ({
  type: CHANGE_PWD_VALUE,
  password,
});

/**
 * Emmet l'intention de se connecter, doit déclencher un appel à l'api
 */
export const sendLogin = () => ({
  type: SEND_LOGIN,
});

/**
 * Action permettant de mettre à jour le pseudo
 */
export const setPseudo = (pseudo) => ({
  type: SET_PSEUDO,
  pseudo,
});

// actions types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_PWD_VALUE = 'CHANGE_PWD_VALUE';
export const SEND_LOGIN = 'SEND_LOGIN';
export const SET_PSEUDO = 'SET_PSEUDO';
export const WS_CONNECT = 'WS_CONNECT';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

// actions creators
/**
 * Action qui contrôle la valeur de l'input d'envoi de message
 * @param {string} inputValue
 */
export const changeInputValue = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue,
});

/**
 * Action qui ajoute un message au state lors de la réponse de Socket.io
 * @param {string} inputValue
 */
export const addMessage = (inputValue) => ({
  type: ADD_MESSAGE,
  inputValue,
});

/**
 * Action qui permet d'ouvrir ou de ferme la modale de connexion
 */
export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

/**
 * Action qui contrôle la valeur du champ email dans la modale de connexion
 * @param {string} email
 */
export const changeEmail = (email) => ({
  type: CHANGE_EMAIL_VALUE,
  email,
});

/**
 * Action qui contrôle la valeur du champ password dans la modale de connexion
 * @param {string} password
 */
export const changePassword = (password) => ({
  type: CHANGE_PWD_VALUE,
  password,
});

/**
 * Action qui emmet l'intention de se connecter et déclenche un appel à l'API
 */
export const sendLogin = () => ({
  type: SEND_LOGIN,
});

/**
 * Action qui permet de mettre à jour le pseudo
 */
export const setPseudo = (pseudo) => ({
  type: SET_PSEUDO,
  pseudo,
});

/**
 * Action qui permet de lancer la connexion à Socket.io
 */
export const wsConnect = () => ({
  type: WS_CONNECT,
});

/**
 * Action qui envoie un message à Socket.io lors de la soumission du formulaire d'envoi d'un message
 * @param {string} message
 */
export const sendNewMessage = (message) => ({
  type: SEND_NEW_MESSAGE,
  message,
});

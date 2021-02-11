import {
  getMaxId,
} from 'src/selectors';

import {
  CHANGE_INPUT_VALUE,
  SUBMIT_NEW_MESSAGE,
  TOGGLE_SETTINGS,
  CHANGE_EMAIL_VALUE,
  CHANGE_PWD_VALUE,
} from '../actions';

const INITIAL_STATE = {
  messages: [
    {
      id: 1,
      sender: 'Ami',
      content: 'Salut ça va ?',
    },
    {
      id: 2,
      sender: 'Ami',
      content: 'Salut ça va ?',
    },
    {
      id: 3,
      sender: 'Ami',
      content: 'Salut ça va ?',
    },
    {
      id: 4,
      sender: 'Me',
      content: 'Ouais grave bien merci',
    },
  ],
  inputValue: '',
  settingsOpen: false,
  pseudo: 'Me',
  emailValue: '',
  pwdValue: '',
};

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.inputValue,
      };
    case SUBMIT_NEW_MESSAGE:
      return {
        ...state,
        inputValue: '',
        messages: [...state.messages, {
          id: (getMaxId(state.messages) + 1),
          sender: state.pseudo,
          content: action.inputValue,
          isFriend: false,
        }],
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settingsOpen: !state.settingsOpen,
      };
    case CHANGE_EMAIL_VALUE:
      return {
        ...state,
        emailValue: action.emailValue,
      };
    case CHANGE_PWD_VALUE:
      return {
        ...state,
        pwdValue: action.pwdValue,
      };
    default:
      return state;
  }
};

export default reducer;

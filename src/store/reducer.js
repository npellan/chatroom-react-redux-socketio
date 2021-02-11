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
      content: 'Salut !',
    },
    {
      id: 2,
      sender: 'Ami',
      content: 'Pfiou quel temps !',
    },
    {
      id: 3,
      sender: 'Ami',
      content: 'T\'as passé une bonne journée ?',
    },
  ],
  pseudo: 'Moi',
  inputValue: '',
  settings: {
    settingsOpen: false,
    emailValue: '',
    pwdValue: '',
  },
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
        settings: {
          ...state.settings,
          settingsOpen: !state.settings.settingsOpen,
        },
      };
    case CHANGE_EMAIL_VALUE:
      return {
        ...state,
        settings: {
          ...state.settings,
          emailValue: action.emailValue,
        },
      };
    case CHANGE_PWD_VALUE:
      return {
        ...state,
        settings: {
          ...state.settings,
          pwdValue: action.pwdValue,
        },
      };
    default:
      return state;
  }
};

export default reducer;

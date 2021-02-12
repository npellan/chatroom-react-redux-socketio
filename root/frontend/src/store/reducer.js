import {
  getMaxId,
} from 'src/selectors';

import {
  CHANGE_INPUT_VALUE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS,
  CHANGE_EMAIL_VALUE,
  CHANGE_PWD_VALUE,
  SEND_LOGIN,
  SET_PSEUDO,
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
    email: '',
    password: '',
    loading: false,
  },
};

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.inputValue,
      };
    case ADD_MESSAGE:
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
          email: action.email,
        },
      };
    case CHANGE_PWD_VALUE:
      return {
        ...state,
        settings: {
          ...state.settings,
          password: action.password,
        },
      };
    case SEND_LOGIN:
      return {
        ...state,
        settings: {
          ...state.settings,
          loading: true,
        },
      };
    case SET_PSEUDO:
      return {
        ...state,
        settings: {
          ...state.settings,
          loading: false,
        },
        pseudo: action.pseudo,
      };
    default:
      return state;
  }
};

export default reducer;

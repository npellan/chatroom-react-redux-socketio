import {
  getMaxId,
} from 'src/selectors';

import {
  CHANGE_INPUT_VALUE,
  SUBMIT_NEW_MESSAGE,
  TOGGLE_SETTINGS,
} from '../actions';

const INITIAL_STATE = {
  messages: [
    {
      id: 1,
      sender: 'Moi',
      content: 'Salut ça va ?',
      isFriend: false,
    },
    {
      id: 2,
      sender: 'Moi',
      content: 'Salut ça va ?',
      isFriend: false,
    },
    {
      id: 3,
      sender: 'Moi',
      content: 'Salut ça va ?',
      isFriend: false,
    },
    {
      id: 4,
      sender: 'Ami',
      content: 'Ouais grave bien merci',
      isFriend: true,
    },
  ],
  inputValue: '',
  settingsOpen: false,
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
          sender: 'Moi',
          content: action.inputValue,
          isFriend: false,
        }],
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settingsOpen: !state.settingsOpen,
      };
    default:
      return state;
  }
};

export default reducer;

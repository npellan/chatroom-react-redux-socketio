import {
  CHANGE_INPUT_VALUE,
  SUBMIT_NEW_MESSAGE,
} from '../actions';

const INITIAL_STATE = {
  messages: [
    {
      id: 1,
      sender: 'Moi',
      content: 'Salut ça va ?',
    },
    {
      id: 1,
      sender: 'Moi',
      content: 'Salut ça va ?',
    },
    {
      id: 1,
      sender: 'Moi',
      content: 'Salut ça va ?',
    },
  ],
  inputValue: '',
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
        messages: [...state.messages, action.inputValue],
      };
    default:
      return state;
  }
};

export default reducer;

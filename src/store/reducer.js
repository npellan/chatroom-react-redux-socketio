import {
  CHANGE_INPUT_VALUE,
} from '../actions';

const INITIAL_STATE = {
  messages: ['Salut ça va ?', 'Moi ça va super bien', 'Réponds stp'],
  inputValue: '',
};

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.inputValue,
      };
    default:
      return state;
  }
};

export default reducer;

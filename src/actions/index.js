export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_NEW_MESSAGE = 'SUBMIT_NEW_MESSAGE';

export const changeInputValue = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue,
});

export const submitNewMessage = (inputValue) => ({
  type: SUBMIT_NEW_MESSAGE,
  inputValue,
});

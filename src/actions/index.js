export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_NEW_MESSAGE = 'SUBMIT_NEW_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';

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

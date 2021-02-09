export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_NEW_MESSAGE = 'SUBMIT_NEW_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_PWD_VALUE = 'CHANGE_PWD_VALUE';

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

export const changeEmailValue = (emailValue) => ({
  type: CHANGE_EMAIL_VALUE,
  emailValue,
});

export const changePwdValue = (pwdValue) => ({
  type: CHANGE_PWD_VALUE,
  pwdValue,
});

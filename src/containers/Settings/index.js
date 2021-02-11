import { connect } from 'react-redux';
import Settings from 'src/components/Settings';

import {
  toggleSettings,
  changeEmailValue,
  changePwdValue,
} from 'src/actions';

const mapStateToProps = (state) => ({
  settingsOpen: state.settings.settingsOpen,
  emailValue: state.settings.emailValue,
  pwdValue: state.settings.pwdValue,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  toggleSettings: () => dispatch(toggleSettings()),
  changeEmailValue: (emailValue) => dispatch(changeEmailValue(emailValue)),
  changePwdValue: (pwdValue) => dispatch(changePwdValue(pwdValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

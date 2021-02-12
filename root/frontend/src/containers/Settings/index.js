import { connect } from 'react-redux';
import Settings from 'src/components/Settings';

import {
  toggleSettings,
  changeEmail,
  changePassword,
  sendLogin,
} from 'src/actions';

const mapStateToProps = (state) => ({
  settingsOpen: state.settings.settingsOpen,
  email: state.settings.email,
  password: state.settings.password,
  loading: state.settings.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  toggleSettings: () => dispatch(toggleSettings()),
  changeEmail: (email) => dispatch(changeEmail(email)),
  changePassword: (password) => dispatch(changePassword(password)),
  onLogin: () => dispatch(sendLogin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

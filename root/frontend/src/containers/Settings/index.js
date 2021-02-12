import { connect } from 'react-redux';
import Settings from 'src/components/Settings';

import {
  toggleSettings,
  changeemail,
  changepassword,
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
  changeemail: (email) => dispatch(changeemail(email)),
  changepassword: (password) => dispatch(changepassword(password)),
  onLogin: () => dispatch(sendLogin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

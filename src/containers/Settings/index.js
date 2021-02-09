import { connect } from 'react-redux';
import Settings from 'src/components/Settings';

import {
  toggleSettings,
} from 'src/actions';

const mapStateToProps = (state) => ({
  settingsOpen: state.settingsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  toggleSettings: () => dispatch(toggleSettings()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

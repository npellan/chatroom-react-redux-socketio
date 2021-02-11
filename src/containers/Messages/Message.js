import { connect } from 'react-redux';
import Message from 'src/components/Messages/Message';

const mapStateToProps = (state, ownProps) => ({
  isFriend: state.pseudo !== ownProps.sender,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);

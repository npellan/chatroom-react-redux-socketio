import { connect } from 'react-redux';
import Form from 'src/components/Form';

import {
  changeInputValue,
  sendNewMessage,
} from 'src/actions';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  changeInputValue: (inputValue) => dispatch(changeInputValue(inputValue)),
  sendNewMessage: (inputValue) => dispatch(sendNewMessage(inputValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

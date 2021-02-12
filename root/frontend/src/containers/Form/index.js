import { connect } from 'react-redux';
import Form from 'src/components/Form';

import {
  changeInputValue,
  submitNewMessage,
} from 'src/actions';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  changeInputValue: (inputValue) => dispatch(changeInputValue(inputValue)),
  submitNewMessage: (inputValue) => dispatch(submitNewMessage(inputValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

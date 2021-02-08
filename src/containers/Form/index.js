import { connect } from 'react-redux';
import Form from 'src/components/Form';

import {
  changeInputValue,
} from 'src/actions';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  changeInputValue: (inputValue) => dispatch(changeInputValue(inputValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

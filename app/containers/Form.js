import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from '../components/Form';
import * as FormActions from '../actions/form';

function mapStateToProps(state){
  return {
    form:state.form
  }
}

function mapDispatchToProps(dispath){
  return bindActionCreators(FormActions,dispath);
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state){
  console.log('state',state);
  return {
    counter:state.counter
  }
}

function mapDispatchToProps(dispath){
  return bindActionCreators(CounterActions,dispath);
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
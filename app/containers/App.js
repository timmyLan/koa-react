import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Header from '../components/Header';
import '../common/layout.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default connect(state => ({

}))(App)
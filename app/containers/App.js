import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Header from '../components/Header';
import '../common/layout.scss';

class App extends Component {
  render() {
    return (
      <section>
        <Header/>
        <section className="contain">
          {this.props.children}
        </section>
      </section>
    );
  }
}

export default connect(state => ({

}))(App)
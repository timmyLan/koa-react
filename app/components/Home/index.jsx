import React, { Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './home.scss';
export default class index extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <LinkContainer to='/picture' ><Button  bsStyle="primary">Click me to see some picture</Button></LinkContainer>
      </Jumbotron>
    );
  }
}

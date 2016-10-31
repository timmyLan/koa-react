import React, { Component, PropTypes } from 'react';
import {Button} from 'react-bootstrap';
export default class Counter extends Component {
  static proTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  }
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
      <section>
        <h2>To play counter game~</h2>
        <p>打开控制台查看redux工作~</p>
        Counter: {counter} times
        {' '}
        <Button onClick={increment} bsStyle="success">+</Button>
        {' '}
        <Button onClick={decrement} bsStyle="danger">-</Button>
        {' '}
        <Button onClick={incrementIfOdd} bsStyle="info">Increment if odd</Button>
        {' '}
        <Button onClick={incrementAsync} bsStyle="primary">Increment Async</Button>
      </section>

    );
  }
}

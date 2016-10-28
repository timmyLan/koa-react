import large from './large.jpg';
import min from './min.jpg';
import React, { Component } from 'react';

export default class ExampleComponent extends Component {
  render() {
    return (
      <ul>
        <li>
          large: <img src={large} alt=""/>
        </li>
        <li>
          min: <img src={min} alt=""/>
        </li>
      </ul>
    );
  }
}

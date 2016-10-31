import large from './large.jpg';
import min from './min.jpg';
import React, { Component } from 'react';

export default class ExampleComponent extends Component {
  render() {
    return (
      <section className="picture">
        <h2>Just show some pictures</h2>
        <ul>
          <li>
            Pic1: <img src={large} alt=""/>
          </li>
          <li>
            Pic2: <img src={min} alt=""/>
          </li>
        </ul>
      </section>
    );
  }
}

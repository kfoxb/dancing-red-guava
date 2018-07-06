import React, { Component, Fragment } from 'react';
import Head from './head.svg'
import RightUpperArm from './RightUpperArm';
import './styles.css';

class App extends Component {
  render() {
    return (
  <Fragment>
    <img alt="dancing red guava" id="head" src={Head} />
    <RightUpperArm />
    <div id="right-lower-arm"></div>
    <div id="left-upper-arm"></div>
    <div id="left-lower-arm"></div>
    <div id="right-upper-leg"></div>
    <div id="right-lower-leg"></div>
    <div id="left-upper-leg"></div>
    <div id="left-lower-leg"></div>
    <div id="spine"></div>
  </Fragment>
    );
  }
}

export default App;

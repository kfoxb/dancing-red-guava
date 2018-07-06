import React, { Component, Fragment } from 'react';
import Head from './Head'
import RightUpperArm from './RightUpperArm';
import RightLowerArm from './RightLowerArm';
import LeftUpperArm from './LeftUpperArm';
import './styles.css';

class App extends Component {
  render() {
    return (
  <Fragment>
    <Head />
    <RightUpperArm />
    <RightLowerArm />
    <LeftUpperArm />
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

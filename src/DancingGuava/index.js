import React, { Component, Fragment } from 'react';
import Head from './Head'
import RightUpperArm from './RightUpperArm';
import RightLowerArm from './RightLowerArm';
import LeftUpperArm from './LeftUpperArm';
import LeftLowerArm from './LeftLowerArm';
import RightUpperLeg from './RightUpperLeg';
import Spine from './Spine';
import './styles.css';

class App extends Component {
  render() {
    return (
  <Fragment>
    <Head />
    <RightUpperArm />
    <RightLowerArm />
    <LeftUpperArm />
    <LeftLowerArm />
    <RightUpperLeg />
    <div id="right-lower-leg"></div>
    <div id="left-upper-leg"></div>
    <div id="left-lower-leg"></div>
    <Spine />
  </Fragment>
    );
  }
}

export default App;

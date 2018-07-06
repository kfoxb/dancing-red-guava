import React, { Component, Fragment } from 'react';
import Head from './Head'
import RightUpperArm from './RightUpperArm';
import RightLowerArm from './RightLowerArm';
import LeftUpperArm from './LeftUpperArm';
import LeftLowerArm from './LeftLowerArm';
import RightUpperLeg from './RightUpperLeg';
import RightLowerLeg from './RightLowerLeg';
import LeftUpperLeg from './LeftUpperLeg';
import Spine from './Spine';
import './styles.css';

class DancingGuava extends Component {
  render() {
    return (
      <Fragment>
        <Head />
        <RightUpperArm />
        <RightLowerArm />
        <LeftUpperArm />
        <LeftLowerArm />
        <RightUpperLeg />
        <RightLowerLeg />
        <LeftUpperLeg />
        <div id="left-lower-leg"></div>
        <Spine />
      </Fragment>
    );
  }
}

export default DancingGuava;

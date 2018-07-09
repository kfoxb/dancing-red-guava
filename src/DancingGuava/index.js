import React from 'react';
import styled from 'styled-components';
import Head from './Head'
import RightUpperArm from './RightUpperArm';
import RightLowerArm from './RightLowerArm';
import LeftUpperArm from './LeftUpperArm';
import LeftLowerArm from './LeftLowerArm';
import RightUpperLeg from './RightUpperLeg';
import RightLowerLeg from './RightLowerLeg';
import LeftUpperLeg from './LeftUpperLeg';
import LeftLowerLeg from './LeftLowerLeg';
import Spine from './Spine';


export default function DancingGuava ({ x, y }) {
  const Container = styled.div`
    position: absolute;
    top: ${y}%;
    left: ${x}%;
    z-index: ${Math.floor(y) - 100}
    transform: translate(-50%, -50%);
  `

  return (
    <Container>
      <Head />
      <RightUpperArm />
      <RightLowerArm />
      <LeftUpperArm />
      <LeftLowerArm />
      <RightUpperLeg />
      <RightLowerLeg />
      <LeftUpperLeg />
      <LeftLowerLeg />
      <Spine />
    </Container>
  );
}

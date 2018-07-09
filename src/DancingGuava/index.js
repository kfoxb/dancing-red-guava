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


export default function DancingGuava ({ x, y, delay }) {
  const Container = styled.div`
    position: absolute;
    top: ${y}%;
    left: ${x}%;
    z-index: ${Math.floor(y) - 100}
    transform: translate(-50%, -50%);
  `

  const animation = `0.8571428572s ${delay}s infinite normal`;
  return (
    <Container>
      <Head animation={animation}/>
      <RightUpperArm animation={animation}/>
      <RightLowerArm animation={animation}/>
      <LeftUpperArm animation={animation}/>
      <LeftLowerArm animation={animation}/>
      <RightUpperLeg animation={animation}/>
      <RightLowerLeg animation={animation}/>
      <LeftUpperLeg animation={animation}/>
      <LeftLowerLeg animation={animation}/>
      <Spine animation={animation}/>
    </Container>
  );
}

DancingGuava.defaultProps = {
  delay: 0.5,
}

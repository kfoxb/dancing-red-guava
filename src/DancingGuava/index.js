import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Head from './Head';
import RightUpperArm from './RightUpperArm';
import RightLowerArm from './RightLowerArm';
import LeftUpperArm from './LeftUpperArm';
import LeftLowerArm from './LeftLowerArm';
import RightUpperLeg from './RightUpperLeg';
import RightLowerLeg from './RightLowerLeg';
import LeftUpperLeg from './LeftUpperLeg';
import LeftLowerLeg from './LeftLowerLeg';
import Spine from './Spine';


export default function DancingGuava({
  delay, paused, x, y,
}) {
  const Container = styled.div`
    position: absolute;
    top: ${y}%;
    left: ${x}%;
    z-index: ${y}
    transform: translate(-50%, -50%);
  `;

  const animation = `0.8571428572s ${delay}s infinite normal`;
  return (
    <Container>
      {[
        Head,
        RightUpperArm,
        RightLowerArm,
        LeftUpperArm,
        LeftLowerArm,
        RightUpperLeg,
        RightLowerLeg,
        LeftUpperLeg,
        LeftLowerLeg,
        Spine,
      ].map(C => (
        <C
          animation={animation}
          extraCss={`animation-play-state: ${paused ? 'paused' : 'running'};`}
          key={C.name}
        />
      ))}
    </Container>
  );
}

DancingGuava.defaultProps = {
  delay: 0.5,
};

DancingGuava.propTypes = {
  delay: PropTypes.number,
  paused: PropTypes.bool.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const LeftLowerLegAnimated = keyframes`
  0%{
    transform: rotate(12deg) translate(22px, 177px);
    height: 71px;
  }
  10%{
    transform: rotate(29deg) translate(83px, 175px);
    height: 58px;
  }
  20%{
    transform: rotate(53deg) translate(162px, 124px);
    height: 51px;
  }
  30%{
    transform: rotate(52deg) translate(137px, 51px);
    height: 66px;
  }
  40%{
    transform: rotate(28deg) translate(77px, 77px);
    height: 66px;
  }
  50%{
    transform: rotate(28deg) translate(77px, 77px);
    height: 66px;
  }
  60%{
    transform: rotate(8deg) translate(51px, 120px);
    height: 56px;
  }
  70%{
    transform: rotate(24deg) translate(91px, 151px);
    height: 56px;
  }
  80%{
    transform: rotate(9deg) translate(23px, 189px);
    height: 64px;
  }
  90%{
    height: 57px;
  }
  100%{
    transform: rotate(12deg) translate(22px, 177px);
    height: 71px;
  }
`;

export default function LeftLowerLeg({ animation }) {
  const LeftLowerLegDiv = styled.div`
    height: 57px;
    width: 15px;
    background-color: black;
    animation: ${LeftLowerLegAnimated} ${animation};
    transform: rotate(9deg) translate(23px, 189px);
    border-radius: 15px;
    position: absolute;
  `;
  return (<LeftLowerLegDiv />);
}

LeftLowerLeg.propTypes = {
  animation: PropTypes.string.isRequired,
};

import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const RightLowerArmAnimation = keyframes`
  0%{
    transform:rotate(125deg) translate(59px, 79px);
    height: 36px;
  }
  10%{
    transform: rotate(118deg) translate(59px, 79px);
  height: 36px;
  }
  20%{
    transform: rotate(120deg) translate(85px, 55px);
    height: 30px;
  }
  30%{
    transform: rotate(134deg) translate(109px, 9px);
    height: 36px;
  }
  40%{
    transform: rotate(60deg) translate(-6px, 67px);
    height: 72px;
  }
  50%{
    transform: rotate(44deg) translate(-29px, 53px);
    height: 72px;
  }
  60%{
    transform: rotate(35deg) translate(-34px, 53px);
    height: 72px;
  }
  70%{
    transform: rotate(46deg) translate(9px, 87px);
    height: 34px;
  }
  80%{
    transform: rotate(120deg) translate(100px, 15px);
    height: 28px;
  }
  90%{
    transform: rotate(137deg) translate(96px, -7px);
    height: 37px;
  }
  100%{
    transform:rotate(125deg) translate(59px, 79px);
    height: 36px;
  }
`;

export default function RightLowerArm({ animation }) {
  const RightLowerArmDiv = styled.div`
    height: 37px;
    width: 15px;
    background-color: black;
    animation: ${RightLowerArmAnimation} ${animation};
    transform: rotate(137deg) translate(96px, -7px);
    border-radius: 15px;
    position: absolute;
  `;
  return (<RightLowerArmDiv />);
}

RightLowerArm.propTypes = {
  animation: PropTypes.string.isRequired,
};

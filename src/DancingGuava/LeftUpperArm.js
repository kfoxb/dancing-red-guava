import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const LeftUpperArmAnimated = keyframes`
  0%{
    transform: rotate(164deg) translate(5px, -28px);
    height: 76px;
  }
  10%{
    transform: rotate(154deg) translate(3px, -16px);
    height: 76px;
  }
  20%{
    transform: rotate(141deg) translate(14px, -20px);
    height: 76px;
  }
  30%{
    transform: rotate(143deg) translate(17px, -23px);
    height: 76px;
  }
  40%{
    transform: rotate(91deg) translate(-36px, -2px);
    height: 76px;
  }
  50%{
    transform: rotate(76deg) translate(-36px, -2px);
    height: 76px;
  }
  60%{
    transform: rotate(66deg) translate(-36px, -6px);
    height: 76px;
  }
  70%{
    transform: rotate(73deg) translate(-20px, -6px);
    height: 76px;
  }
  80%{
    transform: rotate(123deg) translate(17px, -24px);
    height: 76px;
  }
  90%{
    transform: rotate(143deg) translate(11px, -46px);
    height: 76px;
  }
  100%{
    transform: rotate(164deg) translate(5px, -28px);
    height: 76px;
  }
`;


export default function LeftUpperArm({ animation, extraCss }) {
  const LeftUpperArmDiv = styled.div`
    height: 76px;
    width: 15px;
    background-color: black;
    animation: ${LeftUpperArmAnimated} ${animation};
    transform: rotate(143deg) translate(11px, -46px);
    border-radius: 15px;
    position: absolute;
    ${extraCss}
  `;
  return (<LeftUpperArmDiv />);
}

LeftUpperArm.propTypes = {
  animation: PropTypes.string.isRequired,
  extraCss: PropTypes.string,
};

LeftUpperArm.defaultProps = {
  extraCss: '',
};

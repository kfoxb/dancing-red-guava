import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const SpineAnimation = keyframes`
  0%{
    transform: rotate(0deg) translate(-21px, 17px);
    height: 123px;
  }
  10%{
    transform: rotate(0deg) translate(-21px, 17px);
    height: 138px;
  }
  20%{
    transform: rotate(-3deg) translate(-31px, 18px);
    height: 138px;
  }
  30%{
    transform: rotate(-11deg) translate(-44px, 16px);
    height: 138px;
  }
  40%{
    transform: rotate(-11deg) translate(-56px, -5px);
    height: 138px;
  }
  50%{
    transform: rotate(-11deg) translate(-56px, -5px);
    height: 138px;
  }
  60%{
    transform: rotate(-7deg) translate(-50px, 12px);
    height: 138px;
  }
  70%{
    transform: rotate(0deg) translate(-36px, 13px);
    height: 138px;
  }
  80%{
    transform: rotate(7deg) translate(-16px, 29px);
    height: 138px;
  }
  90%{
    transform: rotate(12deg) translate(-9px, 29px);
    height: 138px;
  }
  100%{
    transform: rotate(0deg) translate(-21px, 17px);
    height: 123px;
  }
`;

export default function Spine({ animation }) {
  const SpineDiv = styled.div`
    height: 138px;
    width: 15px;
    background-color: black;
    animation: ${SpineAnimation} ${animation};
    transform: rotate(12deg) translate(-9px, 29px);
    border-radius: 15px;
    position: absolute;
  `;
  return (<SpineDiv />);
}

Spine.propTypes = {
  animation: PropTypes.string.isRequired,
};

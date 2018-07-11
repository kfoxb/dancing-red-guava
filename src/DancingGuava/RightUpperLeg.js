import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const RightUpperLegAnimation = keyframes`
  0%{
    transform: rotate(115deg) translate(89px, 21px);
    height: 95px;
  }
  10%{
    transform: rotate(115deg) translate(97px, 19px);
    height: 91px;
  }
  20%{
    transform: rotate(45deg) translate(57px, 134px);
    height: 91px;
  }
  30%{
    transform: rotate(42deg) translate(49px, 140px);
    height: 99px;
  }
  40%{
    transform: rotate(38deg) translate(19px, 140px);
    height: 90px;
  }
  50%{
    transform: rotate(38deg) translate(19px, 140px);
    height: 90px;
  }
  60%{
    transform: rotate(39deg) translate(37px, 147px);
    height: 90px;
  }
  70%{
    transform: rotate(41deg) translate(41px, 138px);
    height: 86px;
  }
  80%{
    transform: rotate(47deg) translate(63px, 138px);
    height: 86px;
  }
  90%{
    transform: rotate(79deg) translate(111px, 85px);
    height: 70px;
  }
  100%{
    transform: rotate(115deg) translate(89px, 21px);
    height: 95px;
  }
`;

export default function RightUpperLeg({ animation }) {
  const RightUpperLegDiv = styled.div`
    height: 70px;
    width: 15px;
    background-color: black;
    animation: ${RightUpperLegAnimation} ${animation};
    transform: rotate(79deg) translate(111px, 85px);
    border-radius: 15px;
    position: absolute;
  `;
  return (<RightUpperLegDiv />);
}

RightUpperLeg.propTypes = {
  animation: PropTypes.string.isRequired,
};

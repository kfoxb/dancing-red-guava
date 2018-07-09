import React from 'react';
import styled, { keyframes } from 'styled-components';

const RightLowerLegAnimation = keyframes`
  0%{
    transform: rotate(172deg) translate(106px, -81px);
    height: 47px;
  }
  10%{
    transform: rotate(178deg) translate(96px, -102px);
    height: 43px;
  }
  20%{
    transform: rotate(141deg) translate(176px, -111px);
    height: 66px;
  }
  30%{
    transform: rotate(138deg) translate(194px, -104px);
    height: 52px;
  }
  40%{
    transform: rotate(136deg) translate(188px, -77px);
    height: 52px;
  }
  50%{
    transform: rotate(136deg) translate(188px, -77px);
    height: 52px;
  }
  60%{
    transform: rotate(146deg) translate(178px, -125px);
    height: 52px;
  }
  70%{
    transform: rotate(167deg) translate(119px, -176px);
    height: 62px;
  }
  80%{
    transform: rotate(154deg) translate(152px, -145px);
    height: 62px;
  }
  90%{
    transform: rotate(165deg) translate(121px, -130px);
    height: 62px;
  }
  100%{
    transform: rotate(172deg) translate(106px, -81px);
    height: 47px;
  }
`;

export default function RightLowerLeg({ animation }) {
  const RightLowerLegDiv = styled.div`
    height: 62px;
    width: 15px;
    background-color: black;
    animation: ${RightLowerLegAnimation} ${animation};
    transform: rotate(165deg) translate(121px, -130px);
    border-radius: 15px;
    position: absolute;
  `
  return (<RightLowerLegDiv />);
};

import React from 'react';
import styled, { keyframes } from 'styled-components';

const LeftUpperLegAnimated = keyframes`
  0%{
    transform: rotate(-12deg) translate(-41px, 117px);
    height: 67px;
  }
  10%{
    height: 73px;
    transform: rotate(-22deg) translate(-62px, 122px);
  }
  20%{
    transform: rotate(-33deg) translate(-84px, 115px);
    height: 88px;
  }
  30%{
    transform: rotate(-86deg) translate(-100px, 29px);
    height: 101px;
  }
  40%{
    transform: rotate(-103deg) translate(-72px, -18px);
    height: 101px;
  }
  50%{
    transform: rotate(-103deg) translate(-72px, -18px);
    height: 101px;
  }
  60%{
    transform: rotate(-104deg) translate(-92px, -23px);
    height: 91px;
  }
  70%{
    transform: rotate(-63deg) translate(-107px, 51px);
    height: 91px;
  }
  80%{
    transform: rotate(-30deg) translate(-85px, 119px);
    height: 59px;
  }
  90%{
    transform: rotate(-27deg) translate(-78px, 123px);
    height: 59px;
  }
  100%{
    transform: rotate(-12deg) translate(-41px, 117px);
    height: 67px;
  }
`;

export default function LeftUpperLeg({ animation }) {
  const LeftUpperLegDiv = styled.div`
    height: 59px;
    width: 15px;
    background-color: black;
    animation: ${LeftUpperLegAnimated} ${animation};
    transform: rotate(-27deg) translate(-78px, 123px);
    border-radius: 15px;
    position: absolute;
  `;
  return (<LeftUpperLegDiv />);
};

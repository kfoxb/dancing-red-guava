import React from 'react';
import styled, { keyframes } from 'styled-components';
import HeadSvg from './HeadSvg'

const HeadAnimation = keyframes`
  0%{
    transform: rotate(3deg) translate(-126px, -225px);
  }
  10%{
    transform: rotate(1deg) translate(-129px, -236px);
  }
  20%{
    transform: rotate(-4deg) translate(-133px, -216px);
  }
  30%{
    transform: rotate(-11deg) translate(-132px, -217px);
  }
  40%{
    transform: rotate(-8deg) translate(-154px, -262px);
  }
  50%{
    transform: rotate(-4deg) translate(-163px, -253px);
  }
  60%{
    transform: rotate(-8deg) translate(-153px, -242px);
  }
  70%{
    transform: rotate(-2deg) translate(-143px, -221px);
  }
  80%{
    transform: rotate(1deg) translate(-138px, -181px);
  }
  90%{
    transform: rotate(3deg) translate(-124px, -184px);
  }
  100%{
    transform: rotate(3deg) translate(-126px, -225px);
  }
`;

export default function Head({ animation }) {
  const StyledHead = styled.div`
    transform: rotate(3deg) translate(-124px, -184px);
    position: absolute;
    z-index: 1;
    animation: ${HeadAnimation} ${animation};
  `;

  return (
    <StyledHead>
      <HeadSvg />
    </StyledHead>
  );
};

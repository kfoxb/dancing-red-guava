import styled, { keyframes } from 'styled-components';

const LeftLowerArmAnimated = keyframes`
  0%{
    transform: rotate(130deg) translate(41px, -21px);
    height: 68px;
  }
  10%{
    transform: rotate(118deg) translate(41px, -21px);
    height: 57px;
  }
  20%{
    transform: rotate(78deg) translate(76px, 2px);
    height: 32px;
  }
  30%{
    transform: rotate(50deg) translate(71px, 43px);
    height: 32px;
  }
  40%{
    transform: rotate(50deg) translate(13px, -27px);
    height: 32px;
  }
  50%{
    transform: rotate(41deg) translate(6px, -24px);
    height: 32px;
  }
  60%{
    transform: rotate(26deg) translate(6px, -23px);
    height: 32px;
  }
  70%{
    transform: rotate(26deg) translate(22px, -8px);
    height: 38px;
  }
  80%{
    transform: rotate(76deg) translate(73px, -10px);
    height: 33px;
  }
  90%{
    transform: rotate(89deg) translate(90px, -22px);
    height: 33px;
  }
  100%{
    transform: rotate(130deg) translate(41px, -21px);
    height: 68px;
  }
`;

const LeftLowerArm = styled.div`
  height: 33px;
  width: 15px;
  background-color: black;
  animation: ${LeftLowerArmAnimated} 0.8571428572s 0.5s infinite normal;
  transform: rotate(89deg) translate(90px, -22px);
  border-radius: 15px;
  position: absolute;
`;

export default LeftLowerArm;

import React from 'react';
import styled, { keyframes } from 'styled-components';

const RightUpperArmAnimation = keyframes`
	0%{
		transform: rotate(85deg) translate(-32px, 74px);
		height: 76px;
	}
	10%{
		transform: rotate(67deg) translate(-51px, 61px);
		height: 76px;
	}
	20%{
		transform: rotate(69deg) translate(-17px, 64px);
		height: 76px;
	}
	30%{
		transform: rotate(47deg) translate(-29px, 62px);
		height: 76px;
	}
	40%{
		transform: rotate(14deg) translate(-74px, 25px);
		height: 76px;
	}
	50%{
		transform: rotate(23deg) translate(-59px, 35px);
		height: 76px;
	}
	60%{
		transform: rotate(4deg) translate(-72px, 15px);
		height: 76px;
	}
	70%{
		transform: rotate(28deg) translate(-32px, 44px);
		height: 76px;
	}
	80%{
		transform: rotate(43deg) translate(-15px, 54px);
		height: 76px;
	}
	90%{
		transform: rotate(47deg) translate(-19px, 52px);
		height: 76px;
	}
	100%{
		transform: rotate(85deg) translate(-32px, 74px);
		height: 76px;
	}
`;


export default function RightUpperArm({ animation }) {
  const RightUpperArmDiv = styled.div`
    height: 76px;
    width: 15px;
    background-color: black;
    animation: ${RightUpperArmAnimation} ${animation};
    transform: rotate(47deg) translate(-19px, 52px);
    border-radius: 15px;
    position: absolute;
  `
  return (<RightUpperArmDiv />);
};

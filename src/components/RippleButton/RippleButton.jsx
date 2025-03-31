import React, { useRef, useState } from 'react';
 
import styled, { keyframes, css } from 'styled-components';
import { color } from '../../style/color';
import { fontSize } from '../../style/fontSize';
 
const animation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1);
  }

  100% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1), 0 0 0 80px rgba(255, 255, 255, 0);
  }
`;

const rippleAnimation = css`
  ${animation} 0.6s linear infinite;
`

function ContactMe(props) {
 
  return (  <Button onClick={props.onClick} type={props.type} key={props.key}>
        <I />
        {props.children}
        <I />
    </Button> 
  )
}

export default ContactMe

 
const Button = styled.button`
  outline: 0;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background: ${color.blue2196F3};
  min-width: 200px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
  box-sizing: border-box;
  padding: 16px 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;

  &: hover {
    font-size: ${fontSize.fontSize_1_4};
    box-shadow: 0 0 10px ${color.blue2196F3}, inset 0 0 10px ${color.white};
  }
`
const I = styled.i`

animation: ${rippleAnimation}
`
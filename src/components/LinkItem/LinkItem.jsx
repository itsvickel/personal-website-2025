import { useState } from 'react';  
import styled from 'styled-components';
import { color } from '../../style/color';

import { glowStyle ,hoverGlowStyle } from '../../style/styles';

function LinkItem(props) { 

  return (
      <LinkContainer mainColor={props.mainColor} secondaryColor={props.secondaryColor}  target="_blank" href={props.href}>
          {/* <p>{props.name} </p> */}
          <img src={props.img} />
      </LinkContainer>
       
  )
}

export default LinkItem

const LinkContainer = styled.a`
  margin: 2%;
  border-radius: 10px;

  ${props => glowStyle(props.mainColor)}

  &:hover { 
    ${props => hoverGlowStyle(props.mainColor, props.secondaryColor)}
  }
   
`;
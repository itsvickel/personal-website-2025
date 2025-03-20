import { useState } from 'react';  
import styled from 'styled-components';
import { color } from '../../style/Color';

function LinkItem(props) { 

  return (
      <LinkContainer target="_blank" href={props.href}>
          {/* <p>{props.name} </p> */}
          <img src={props.img} />
      </LinkContainer>
       
  )
}

export default LinkItem

const LinkContainer = styled.a`
  margin: 2%;
  padding: 4%;
  border: 1px solid ${color.white};
  border-radius: 10px;

  &: hover{
    opacity: 0.5;
    cursor: pointer;
  }
`;
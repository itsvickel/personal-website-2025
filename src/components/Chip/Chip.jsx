import { useState } from 'react';  
import styled from 'styled-components';
import { color } from '../../style/Color';
import { fontSize } from '../../style/fontSize';

function Chip(props) { 
  return (
      <ChipContainer color={props.color}>
          <img src={props.img} />
          <Title>{props.name}</Title>
      </ChipContainer>
  )
}

export default Chip

const ChipContainer = styled.div`
  margin: 1%;
  padding: 1%;
  border: 1px solid ${color.white};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  font-size: ${fontSize.fontSize_1_5};
  color: ${color.white};
  background: ${props => props.color };
  align-items: center;
`;

const Title = styled.div`
  margin: 0 2%;
`;
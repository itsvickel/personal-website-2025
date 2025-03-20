import { useState } from 'react';  
import styled from 'styled-components';
import { color } from '../../style/color';
import { fontSize } from '../../style/fontSize';

function Chip(props) { 
  return (
      <ChipContainer color={props.color}>
          <Image src={props.img} />
          <Title>{props.name}</Title>
      </ChipContainer>
  )
}

export default Chip

const ChipContainer = styled.div`
  padding: 2%;
  min-width: fit-content;
  border: 1px solid ${color.white};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  font-size: ${fontSize.fontSize_1_3};
  color: ${color.white};
  background: ${props => props.color };
  align-items: center;
  max-height: 1em;
`;

const Title = styled.div`
  margin: 0 2%;
`;

const Image = styled.img`
  width: 100%;
  height: auto; //Auto adjust height (maintain aspect ratio)
`;
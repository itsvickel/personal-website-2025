import { useState } from 'react';  
import styled from 'styled-components';
import { color } from '../../style/Color';
import { fontSize } from '../../style/fontSize';

function Chip(props) { 
  return (
      <ChipContainer color={props.color}>
          <img src={props.img} />
          <div>{props.name}</div>
      </ChipContainer>
  )
}

export default Chip

const ChipContainer = styled.div`
  margin: 1%;
  padding: 2%;
  border: 1px solid ${color.white};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  font-size: ${fontSize.fontSize_1_5}
  font-weight: bold;
  color: ${color.white};
  background: ${props => props.color };
`;
import { useState } from 'react'  

import styled from 'styled-components';
import { color } from '../../style/Color';

function Hobby() { 
  return (
      <Container>
        <Header>

        </Header>

        <InstagramPostContainer>
          
        </InstagramPostContainer>

      </Container>
  )
}

export default Hobby

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  max-height: 80vh;
  min-width: 60vw;
  padding: 2%;
  background: ${color.white};
  border-radius: 20px;
  box-shadow: 10px 5px 5px ${color.lightGrey};
`;

const Header = styled.div``;

const InstagramPostContainer = styled.div``;

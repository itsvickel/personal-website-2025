import { useState, useEffect, useMemo } from 'react'  

import styled from 'styled-components';
import { color } from '../../style/Color';
import { fontSize } from '../../style/fontSize';
import {loadFull} from "tsparticles";
import { TypeAnimation } from 'react-type-animation';

function Home() { 

  return (
      <Container>
                   
        <Header>
              <Title>Vickel Leung</Title>
              <Subtitle>I am a 
                <TypeAnimation
                sequence={[
                    ' Fullstack Developer', // Types 'One'
                    5000, // Waits 1s
                    ' 3D artist', // Deletes 'One' and types 'Two'
                    5000, // Waits 2s
                    ' Avid Card collector', // Types 'Three' without deleting 'Two'
                 
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                />
             </Subtitle>
          </Header>
      </Container>
 
 
  )
}

export default Home

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  max-height: 70vh;
  min-width: 50vw;
  max-width: 50vw;
  padding: 2%;
  background: ${color.white};
  border-radius: 20px;
  box-shadow: 10px 5px 5px ${color.lightGrey};
`;

const Header = styled.div`
    width: 100%;
    justify-items: center;
`;

const Title = styled.div`
    font-size: ${fontSize.fontSize_4};
`;

const Subtitle = styled.div`
    color: ${color.lightGrey};
    margin: 1%;
    font-size: ${fontSize.fontSize_2};
`;

const ParticleContainer = styled.div`
   position: relative;
`;
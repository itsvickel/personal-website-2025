import { useState, useEffect, useMemo } from 'react'  

import styled from 'styled-components';
import { color } from '../../style/Color';
import { fontSize } from '../../style/fontSize';
import {loadFull} from "tsparticles";
import { TypeAnimation } from 'react-type-animation';
import { constants } from '../../style/constant';

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
    justify-content: center;
    ${constants.defaultPageStyle};
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
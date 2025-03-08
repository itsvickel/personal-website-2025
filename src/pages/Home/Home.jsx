import { useState, useEffect, useMemo } from 'react'  

import styled from 'styled-components';
import { color } from '../../style/Color';
import { fontSize } from '../../style/fontSize';
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import particlesOptions from "../../particles.json";

function Home() { 
  const [init, setInit] = useState(false);

  useEffect(() => {
      if (init) {
          return;
      }

      initParticlesEngine(async (engine) => {
          await loadFull(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  return (
      <Container>
          {/* {init && <Particles  
            options={particlesOptions}>

          </Particles>
          }
        <Particles />                      */}
        <Header>
              <Title>Vickel Leung</Title>
              <Subtitle>Fullstack Developer</Subtitle>
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
  max-height: 80vh;
  min-width: 50vw;
  max-width: 50vw;
  padding: 2%;
  background: ${color.white};
  border-radius: 20px;
  box-shadow: 10px 5px 5px ${color.lightGrey};
`;

const Header = styled.div`
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
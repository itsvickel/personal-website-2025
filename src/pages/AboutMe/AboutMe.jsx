import { useState } from 'react'  
import styled from 'styled-components';
import { color } from '../../style/Color';
import Chip from '../../components/Chip/Chip';
import { fontSize } from '../../style/fontSize';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import weightlifting from '../../assets/weightlifting.png';
import baseballCard from '../../assets/baseball-card.png';
import code from '../../assets/code.png';
import art from '../../assets/art.png';

function MySkills(props, index){
  return (
    // <ParallaxLayer offset={index + 0.5} speed={1.5} style={{ justifyContent: 'flex-end' }}>
    <SkillContainer key={index}>
      <Image src={props.image} />
      <SubTitle>
        {props.title}
      </SubTitle>
      <Description>
        {props.description}
      </Description>
    </SkillContainer>
  // </ParallaxLayer>
  )
}

function AboutMe() { 

  const titleText = "Hi, I'm Vickel Leung! 👋I'm a full-stack developer with a passion for building impactful projects.";
  const biographyText = "While I specialize in front-end development, I can handle the backend when needed. In my spare time, I create 3D art using Blender, blending my love for technology and design. Always exploring new ideas and pushing creative boundaries!"

  const whatIDo = [
    {
      image :code,
      title: "Programming",
      description: 'I enjoy building websites and designing UI/UX that create smooth and enjoyable experiences for users. There’s something really satisfying about making things both functional and beautiful.'
    },
    {
      image :art,
      title: "3D Art",
      description: 'I love creating 3D art in Blender and bringing my ideas to life. Seeing a model go from a simple shape to a fully realized piece never gets old.'
    },
    {
      image : weightlifting,
      title: "Weight Lifter",
      description: 'Weightlifting is a big part of my life—I love going to the gym and pushing myself with snatches and clean & jerks. There’s nothing like the feeling of hitting a new personal best.'
    },
    {
      image : baseballCard,
      title: "Card Collector",
      description: 'I’m a big card collector, especially Pokémon and Magic: The Gathering. Opening packs and finding rare cards brings back the same excitement I had as a kid.'
    },
  ]
  
  return (
      <AboutMeContainer>
        
        <Container>
          <Title>About <Highligth>Me</Highligth></Title>
          <Underline />
          <MainTitle>{titleText}</MainTitle>
          <Bio>
            {biographyText}
          </Bio>
        </Container>
       

        <Container>
        {/* <Parallax pages={4} > */}
        {/* <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ justifyContent: 'flex-start' }}> */}
          <Title>What I <Highligth>Do</Highligth></Title>
        {/* </ParallaxLayer> */}

          <Underline />
          <WhatIDo>
            {whatIDo.map((item, index) =>{
              return MySkills(item, index);
            })}
          </WhatIDo>
        {/* </Parallax> */}

        </Container>  

      </AboutMeContainer>
  )
}

export default AboutMe

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  max-height: 80vh;
  min-width: 50vw;
  max-width: 50vw;
  padding: 2%;
  overflow: auto;
  background: ${color.white};
  border-radius: 20px;
  box-shadow: 10px 5px 5px ${color.lightGrey};
`

const WhatIDo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Container = styled.div`
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
`

const Title = styled.div`
  font-size: ${fontSize.fontSize_2}
`

const Highligth = styled.span`
  color: ${color.subtext}
`
const MainTitle = styled.div`
  margin: 2% 0;
  font-size : ${fontSize.fontSize_1_5};
`
const Bio = styled.div`
  font-size : ${fontSize.fontSize_1_3};
  color: ${color.grey808080};
`

const Image = styled.img``;

const SubTitle = styled.div`
  font-weight: bold;
  font-size: ${fontSize.fontSize_1_5}
`;

const Description = styled.div`
  margin: 1%;
  font-size: ${fontSize.fontSize_1_3};
  color: ${color.grey808080};
`;

const Underline = styled.div`
  margin: 1% 0;
  border-bottom: 1px solid ${color.greyB0B0B0};
`;

const SkillContainer = styled.div`
  margin: 2% 0;
  flex: 50%;  
`;
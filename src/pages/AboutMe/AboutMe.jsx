import { useState } from 'react'  
import styled from 'styled-components';
import { color } from '../../style/Color';
import Chip from '../../components/Chip/Chip';
import { fontSize } from '../../style/fontSize';

import weightlifting from '../../assets/weightlifting.png';
import baseballCard from '../../assets/baseball-card.png';
import code from '../../assets/code.png';
import art from '../../assets/art.png';

function MySkills(props, index){
  return (
    <Container key={index}>
      <Image src={props.image} />
      <SubTitle>
        {props.title}
      </SubTitle>
      <Description>
        {props.description}
      </Description>
    </Container>
  )
}

function AboutMe() { 

  const biographyText = "Hi, I'm Vickel Leung! 👋I'm a full-stack developer with a passion for building impactful projects. While I specialize in front-end development, I can handle the backend when needed. In my spare time, I create 3D art using Blender, blending my love for technology and design. Always exploring new ideas and pushing creative boundaries!"

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
          <Bio>
            {biographyText}
          </Bio>
        </Container>
       

        <Container>
          <Title>What I <Highligth>Do</Highligth></Title>
          <Underline />
          <WhatIDo>
            {whatIDo.map((item, index) =>{
              return MySkills(item, index);
            })}
          </WhatIDo>
        </Container>  

      </AboutMeContainer>
  )
}

export default AboutMe

const AboutMeContainer = styled.div`
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
`

const Container = styled.div`
  padding: 2%;
`

const Title = styled.div`
  font-size: ${fontSize.fontSize_2}
`

const Highligth = styled.span`
  color: ${color.subtext}
`

const Bio = styled.div`
  font-size : ${fontSize.fontSize_1_3}
`

const Image = styled.img``;

const SubTitle = styled.div`
  font-weight: bold;
  font-size: ${fontSize.fontSize_1_5}
`;

const Description = styled.div`
  font-size: ${fontSize.fontSize_1_3}
`;

const Underline = styled.div`
  margin: 1% 0;
  border-bottom: 1px solid ${color.greyB0B0B0};
`;
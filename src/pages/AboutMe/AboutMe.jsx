import { useState } from 'react'  
import styled from 'styled-components';
import { color } from '../../style/Color';
import Chip from '../../components/Chip/Chip';
import { fontSize } from '../../style/fontSize';

import javascriptImg from '../../assets/java-script.png';
import figmaImg from '../../assets/figma.png';
import css3Img from '../../assets/css-3.png';
import htmlImg from '../../assets/html.png';
import javaImg from '../../assets/java.png';
import reactImg from '../../assets/atom.png';
import weightlifting from '../../assets/weightlifting.png';
import baseballCard from '../../assets/baseball-card.png';
import code from '../../assets/code.png';
import art from '../../assets/art.png';
import photoshop from '../../assets/adobe-photoshop.png';

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

  const Progamminglang = [
    {
      image : javascriptImg,
      name: "Javascript",
      color: color.yellow
    },
    {
      image :css3Img,
      name: "CSS3",
      color: color.orangee34c26
    },
    {
      image :htmlImg,
      name: "HTML5",
      color: color.blue264de4
    },
    {
      image :reactImg ,
      name: "ReactJS",
      color: color.blue61DBFB
    },
    {
      image :javaImg,
      name: "Java",
      color: color.brown
    },
  ]

  const tools = [
    {
      image :figmaImg,
      name: "Figma",
      color: color.yellow
    },
    {
      image :"",
      name: "Canva",
      color: color.brown
    },
    {
      image : photoshop,
      name: "Photoshop",
      color: color.brown
    }, 
  ]

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
          <Title>Tech <Highligth>Stacks</Highligth></Title>
          <Underline />
          <ProgrammingLanguage>
            {Progamminglang.map((item, index)=>{
              return <Chip key={index} img={item.image} name={item.name} color={item.color} />
            })}
          </ProgrammingLanguage>
        </Container>

        <Container>
          <Title>Design <Highligth>Tools</Highligth></Title>
          <Underline />
          <DesignTools>
            {tools.map((item, index)=>{
              return <Chip key={index} img={item.image} name={item.name} color={item.color} />
            })}
          </DesignTools>
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
  padding: 2%;
  overflow: auto;
  background: ${color.white};
  border-radius: 20px;
  box-shadow: 10px 5px 5px ${color.lightGrey};
`

const ProgrammingLanguage = styled.div`
  display: flex;
  flex-direction: row;
`

const DesignTools = styled.div`
display: flex;
flex-direction: row;
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
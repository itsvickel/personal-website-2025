import { useState } from 'react'  
import styled from 'styled-components';
import { color } from '../../style/Color';
import Chip from '../../components/Chip/Chip';
import { constants } from '../../style/constant';

import javascriptImg from '../../assets/java-script.png';
import figmaImg from '../../assets/figma.png';
import css3Img from '../../assets/css-3.png';
import htmlImg from '../../assets/html.png';
import javaImg from '../../assets/java.png';
import reactImg from '../../assets/atom.png';

function MySkills(props, index){
  return (
    <Container key={index}>
      <Image>
        {props.img}
      </Image>
      <SubTitle>
        {props.subtitle}
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
      color: color.brown
    },
    {
      image :htmlImg,
      name: "HTML5",
      color: color.brown
    },
    {
      image :reactImg ,
      name: "ReactJS",
      color: color.brown
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
      name: "Java",
      color: color.brown
    },
    {
      image :"",
      name: "CSS3",
      color: color.brown
    }, 
  ]

  const whatIDo = [
    {
      image :"",
      name: "Programming",
      description: 'Programming'
    },
    {
      image :"",
      name: "3D Art",
      description: 'Programming2'
    },
    {
      image :"",
      name: "Programming",
      description: 'Programming3'
    },
  ]
  
  return (
      <AboutMeContainer>
        
        <Container>
          <Title>About <Highligt>Me</Highligt></Title>
          <Bio>
            {biographyText}
          </Bio>
        </Container>
       
        <Container>
          <Title>Tech <Highligt>Stacks</Highligt></Title>
          <ProgrammingLanguage>
            {Progamminglang.map((item, index)=>{
              return <Chip key={index} img={item.image} name={item.name} color={item.color} />
            })}
          </ProgrammingLanguage>
        </Container>

        <Container>
          <Title>Design <Highligt>Tools</Highligt></Title>
          <DesignTools>
            {tools.map((item, index)=>{
              return <Chip key={index} img={item.image} name={item.name} color={item.color} />
            })}
          </DesignTools>
        </Container>

        <Container>
          <Title>What I <Highligt>Do</Highligt></Title>
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
  margin: 2% 5%;
`

const Title = styled.div`
  font-size: ${constants.fontSize.fontSize_2}
`

const Highligt = styled.span`
  color: ${color.subtext}
`

const Bio = styled.div`
`

const Image = styled.img``;

const SubTitle = styled.div``;

const Description = styled.div``;

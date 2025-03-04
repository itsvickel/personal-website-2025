import { useState } from 'react'  
import styled from 'styled-components';
import { color } from '../../style/Color';
import Chip from '../../components/Chip/Chip';
import { constants } from '../../style/constant';

function AboutMe() { 

  const biographyText = "Hi, I'm Vickel Leung! 👋I'm a full-stack developer with a passion for building impactful projects. While I specialize in front-end development, I can handle the backend when needed. In my spare time, I create 3D art using Blender, blending my love for technology and design. Always exploring new ideas and pushing creative boundaries!"

  const Progamminglang = [
    {
      image :"",
      name: "Javascript",
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
    {
      image :"",
      name: "HTML5",
      color: color.brown
    },
    {
      image :"",
      name: "ReactJS",
      color: color.brown
    },
  ]

  const tools = [
    {
      image :"",
      name: "Javascript",
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
`

const Container = styled.div`

`

const Title = styled.div`
  font-size: ${constants.fontSize.fontSize_2}

`

const Highligt = styled.span`
  color: ${color.subtext}
`

const Bio = styled.div`
`
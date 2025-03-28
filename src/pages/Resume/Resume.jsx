import { useState } from 'react'
import styled from 'styled-components';

import { color } from '../../style/color'
import { fontSize } from '../../style/fontSize';

import javascriptImg from '../../assets/java-script.png';
import figmaImg from '../../assets/figma.png';
import css3Img from '../../assets/css-3.png';
import htmlImg from '../../assets/html-5.png';
import javaImg from '../../assets/java.png';
import reactImg from '../../assets/atom.png';
import photoshop from '../../assets/adobe-photoshop.png';
import Chip from '../../components/Chip/Chip';

import Slide from '@mui/material/Slide';
import { constants } from '../../style/constant';

import useMediaQuery from '@mui/material/useMediaQuery';

function Resume() {

  const TechStacks = [
    {
      image: javascriptImg,
      name: "Javascript",
      color: color.yellow
    },
    {
      image: css3Img,
      name: "CSS3",
      color: color.blue2196F3
    },
    {
      image: htmlImg,
      name: "HTML5",
      color: color.blue264de4
    },
    {
      image: reactImg,
      name: "ReactJS",
      color: color.blue61DBFB
    },
    {
      image: javaImg,
      name: "Java",
      color: color.brown
    },
    {
      image: figmaImg,
      name: "Figma",
      color: color.orangeFC490B
    },
    {
      image: photoshop,
      name: "Photoshop",
      color: color.blue001834
    },
  ]


  const jobDescription = {
    portablEHR: [
      "Architected a scalable front-end using React, Redux, optimized routing, and i18n translation.Led the development of a portal app for bookings, live chat, and automated support, boosting user engagement by 50%.",
      "Led the development of a portal app for bookings, live chat, and automated support, boosting user engagement by 50%.",
      "Implemented WebSockets for real-time chat and notifications, enhancing responsiveness.",
      "Directed the migration of 80% of mobile features to web, increasing accessibility and retention.",
      "Designed intuitive UI/UX with optimized user flows and reusable components.",
      "Drove agile development in Scrum teams, ensuring on-time delivery through sprint planning and stand-ups.",
    ],
    Geothentic: [
      "Integrated WebSockets for real-time fleet tracking, improving data accuracy and reducing latency by 40%.",
      "Developed advanced UI/UX in React.js with reusable components and optimized state management for a seamless user experience.",
      "Collaborated in Agile Scrum teams, ensuring efficient sprints, quick issue resolution, and timely feature delivery.",
    ],
    Skylow: [
      "Assessed, developed, and managed software projects to align with weekly deliverables and objectives",
      "Engineered solutions tailored to client requirements and strategic business goals.",
      "Led collaborative peer reviews to refine, optimize, and rigorously test newly implemented features.",
    ],
  }

  const works = [
    {
      name: "Portable EHR",
      date: "Apr 2022 - Feb 2025",
      role: "Software Developer",
      description: jobDescription.portablEHR
    },
    {
      name: "Geothentic",
      date: "Mar 2020 - Feb 2022",
      role: "Full Stack Developer",
      description: jobDescription.Geothentic
    },
    {
      name: "Skylow",
      date: "Jan 2019 - Nov 2019",
      role: "Web Developer",
      description: jobDescription.Skylow
    }
  ]

  const [selectedDescription, setSelectedDescription] = useState(works[0].description);
  const [selectedItem, setSelectedItem] = useState(works[0]);

  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Slide direction={'down'} in={true}>
      <Container>
        <Wrapper>
          <Title>Tech <Highligth>Stacks</Highligth></Title>
          <ProgrammingLanguage>
            {TechStacks.map((item, index) => {
              return <Chip key={index} img={item.image} name={item.name} color={item.color} />
            })}
          </ProgrammingLanguage>
        </Wrapper>

        <Header>
          <Title></Title>
          <Title>Employment <Highligth>History</Highligth></Title>
        </Header>

        <RowContainer>
          <ResumeContainer>
            {
              works.map((item, index) => {
                return <ResumeItem selected={selectedItem.name === item.name}
                  onClick={
                    () => {
                      setSelectedDescription(item.description);
                      setSelectedItem(item)
                    }}
                  key={index}
                >
                  <RowContainer selected={selectedItem.name === item.name} >
                    <JobTitle>{item.name}</JobTitle>
                    <JobDate>{item.date}</JobDate>

                  </RowContainer>
                  {!matches ? item.role : null}
                </ResumeItem>

              })
            }
          </ResumeContainer>

          <JobRole>{matches && selectedItem ? selectedItem.role : null}</JobRole>
          <ResumeDescription>
            {
              selectedDescription.map((item, index) => {
                return <BulletPoint>⦿ {item}</BulletPoint>

              })
            }
          </ResumeDescription>

        </RowContainer>


      </Container>
    </Slide>
  )
}

export default Resume

const Container = styled.div`
  ${constants.defaultPageStyle};
`;

const Title = styled.div`
  font-size: ${fontSize.fontSize_3};
  
`

const Highligth = styled.span`
  color: ${color.subtext}
`

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: auto; 

  @media only screen and (max-width: 800px){ 
    flex-direction: row;
  }
`;

const ResumeItem = styled.div`
  width: 14vw;
  height: 8vh;
  padding: 2%;
  margin: 2%;   
  border-radius: 10px;
  color: ${props => props.selected ? color.white : color.main};
  font-size: ${fontSize.fontSize_1_5}
  display: flex;
  flex-direction: column;
  background: ${props => props.selected ? color.subtext : color.greyE8E8E8};
  
  @media only screen and (max-width: 800px){ 
    width: 100%;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${props => props.selected ? color.white : color.main};

  @media only screen and (max-width: 800px){ 
    flex-direction: column;
    overflow-y: scroll;
  }
`;

const ResumeDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin: 0 5%;
  padding: 2%;
  font-size: ${fontSize.fontSize_2_5};
  background: ${color.greyF5F5F5};

  @media only screen and (max-width: 800px){ 
    margin: 2%; 
  }

`;

const Header = styled.div`
  margin-right: auto;
`;

const ProgrammingLanguage = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 800px){ 
    overflow: auto;
    flex-wrap: wrap;
    place-content: center;
  }
`

const Wrapper = styled.div`
  align-items: left;
  margin: 2% 0;
`;

const BulletPoint = styled.div`
  margin: 1%;
`;

const JobTitle = styled.div`
  font-size: ${fontSize.fontSize_2};
  font-weight: bold;
`;
const JobDate = styled.div`
  font-size: ${fontSize.fontSize_1_5};
  font-weight: bold;
`;

const JobRole = styled.div`
  font-size: ${fontSize.fontSize_3};
  font-weight: bold;
`;